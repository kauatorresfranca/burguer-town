import { useState, useEffect } from 'react';
   import * as S from './styles';

   interface Item {
     id: number;
     title: string;
     description?: string;
     price: number | string; // Permitir string para lidar com API
     image?: string;
   }

   interface SectionType {
     id: number;
     name: string;
     items: Item[];
   }

   const API_URL = 'http://127.0.0.1:8000/api/sections/';
   const MENUITEMS_URL = 'http://127.0.0.1:8000/api/menuitems/';

   const Admin = () => {
     const [sections, setSections] = useState<SectionType[]>([]);
     const [newSectionName, setNewSectionName] = useState('');
     const [newItemTitle, setNewItemTitle] = useState('');
     const [newItemDescription, setNewItemDescription] = useState('');
     const [newItemPrice, setNewItemPrice] = useState<number | ''>('');
     const [newItemImage, setNewItemImage] = useState<File | null>(null);
     const [selectedSectionId, setSelectedSectionId] = useState<number | null>(null);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState<string | null>(null);

     useEffect(() => {
       const fetchSections = async () => {
         setLoading(true);
         try {
           const response = await fetch(API_URL);
           if (!response.ok) throw new Error('Erro ao carregar seções');
           const data = await response.json();
           setSections(data);
         } catch (err) {
           setError((err as Error).message);
         } finally {
           setLoading(false);
         }
       };
       fetchSections();
     }, []);

     const handleAddSection = async () => {
       if (!newSectionName) return setError('Nome da seção é obrigatório');
       setLoading(true);
       setError(null);
       try {
         const response = await fetch(API_URL, {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ name: newSectionName }),
         });
         if (!response.ok) throw new Error('Erro ao adicionar seção');
         const newSection = await response.json();
         setSections([...sections, newSection]);
         setNewSectionName('');
       } catch (err) {
         setError((err as Error).message);
       } finally {
         setLoading(false);
       }
     };

     const handleAddItem = async (sectionId: number) => {
       if (!newItemTitle || newItemPrice === '') return setError('Título e preço são obrigatórios');
       if (!sectionId || !sections.some(sec => sec.id === sectionId)) {
         return setError('Seção inválida');
       }
       setLoading(true);
       setError(null);
       const formData = new FormData();
       formData.append('title', newItemTitle);
       formData.append('description', newItemDescription);
       formData.append('price', String(newItemPrice));
       formData.append('section', String(sectionId));
       if (newItemImage) formData.append('image', newItemImage);

       try {
         const response = await fetch(MENUITEMS_URL, {
           method: 'POST',
           body: formData,
         });
         if (!response.ok) {
           const errorData = await response.json();
           throw new Error(errorData.detail || errorData.section || 'Erro ao adicionar item');
         }
         const newItem = await response.json();
         const updatedSections = sections.map(sec =>
           sec.id === sectionId ? { ...sec, items: [...sec.items, newItem] } : sec
         );
         setSections(updatedSections);
         resetItemFields();
       } catch (err) {
         setError((err as Error).message);
       } finally {
         setLoading(false);
       }
     };

     const handleUpdatePrice = async (sectionId: number, itemId: number, newPrice: number) => {
       setLoading(true);
       setError(null);
       try {
         const response = await fetch(`${MENUITEMS_URL}${itemId}/`, {
           method: 'PATCH',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ price: newPrice }),
         });
         if (!response.ok) throw new Error('Erro ao atualizar preço');
         const updatedItem = await response.json();
         const updatedSections = sections.map(sec =>
           sec.id === sectionId
             ? { ...sec, items: sec.items.map(it => it.id === itemId ? updatedItem : it) }
             : sec
         );
         setSections(updatedSections);
       } catch (err) {
         setError((err as Error).message);
       } finally {
         setLoading(false);
       }
     };

     const resetItemFields = () => {
       setNewItemTitle('');
       setNewItemDescription('');
       setNewItemPrice('');
       setNewItemImage(null);
       setSelectedSectionId(null);
     };

     return (
       <S.AdminContainer>
         <S.Title>Admin Dashboard</S.Title>
         {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
         {loading && <S.Loading>Carregando...</S.Loading>}

         <S.FormSection>
           <S.SectionTitle>Criar Nova Seção</S.SectionTitle>
           <S.Input
             type="text"
             value={newSectionName}
             onChange={(e) => setNewSectionName(e.target.value)}
             placeholder="Nome da Seção"
             aria-label="Nome da Seção"
           />
           <S.Button onClick={handleAddSection} disabled={loading}>Adicionar Seção</S.Button>
         </S.FormSection>

         {sections.map(section => (
           <S.Section key={section.id}>
             <S.SectionTitle>{section.name}</S.SectionTitle>
             <S.ItemList>
               {section.items.map(item => (
                 <S.Item key={item.id}>
                   <S.ItemInfo>
                     <span>{item.title}</span>
                     <span>R$ {Number(item.price).toFixed(2)}</span> {/* Converte para número */}
                   </S.ItemInfo>
                   <S.Input
                     type="number"
                     step="0.01"
                     defaultValue={Number(item.price)} // Converte para número
                     onBlur={(e) => handleUpdatePrice(section.id, item.id, Number(e.target.value))}
                     aria-label={`Atualizar preço de ${item.title}`}
                   />
                 </S.Item>
               ))}
             </S.ItemList>

             <S.FormSection>
               <S.SubTitle>Adicionar Item à Seção</S.SubTitle>
               <S.Input
                 type="text"
                 value={selectedSectionId === section.id ? newItemTitle : ''}
                 onChange={(e) => { setNewItemTitle(e.target.value); setSelectedSectionId(section.id); }}
                 placeholder="Título do Item"
                 aria-label="Título do Item"
               />
               <S.Input
                 type="text"
                 value={selectedSectionId === section.id ? newItemDescription : ''}
                 onChange={(e) => { setNewItemDescription(e.target.value); setSelectedSectionId(section.id); }}
                 placeholder="Descrição (opcional)"
                 aria-label="Descrição do Item"
               />
               <S.Input
                 type="number"
                 step="0.01"
                 value={selectedSectionId === section.id ? newItemPrice : ''}
                 onChange={(e) => { setNewItemPrice(Number(e.target.value)); setSelectedSectionId(section.id); }}
                 placeholder="Preço"
                 aria-label="Preço do Item"
               />
               <S.Input
                 type="file"
                 accept="image/*"
                 onChange={(e) => { setNewItemImage(e.target.files?.[0] || null); setSelectedSectionId(section.id); }}
                 aria-label="Upload de Imagem"
               />
               <S.Button onClick={() => handleAddItem(section.id)} disabled={loading}>Adicionar Item</S.Button>
             </S.FormSection>
           </S.Section>
         ))}
       </S.AdminContainer>
     );
   };

   export default Admin;