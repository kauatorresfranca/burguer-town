import { useState, useEffect } from 'react';
import * as S from './styles';

interface Item {
  id: number;
  title: string;
  description?: string;
  price: number | string;
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
  const [editItem, setEditItem] = useState<Item | null>(null);
  const [deleteItemId, setDeleteItemId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Definindo a aba inicial como 'dashboard'
  const [activeTab, setActiveTab] = useState('dashboard'); 

  // --- Lógica de Fetch de Dados (Inalterada) ---
  useEffect(() => {
    const fetchSections = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Erro ao carregar seções');
        const data = await response.json();
        if (data.length > 0) {
          setSelectedSectionId(data[0].id);
        }
        setSections(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    // Fetch only if needed for the current view, but keeping it for 'menu' setup
    if (activeTab === 'menu') {
        fetchSections();
    }
  }, [activeTab]); // Adicionado activeTab para re-fetch se mudar para 'menu'

  // --- Funções CRUD (Lógica Inalterada, apenas refatoradas para clareza) ---

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
      setSelectedSectionId(newSection.id);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = async () => {
    if (!newItemTitle || newItemPrice === '') return setError('Título e preço são obrigatórios');
    if (!selectedSectionId) return setError('Selecione uma seção válida.');

    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('title', newItemTitle);
    formData.append('description', newItemDescription);
    formData.append('price', String(newItemPrice));
    formData.append('section', String(selectedSectionId));
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
        sec.id === selectedSectionId ? { ...sec, items: [...sec.items, newItem] } : sec
      );
      setSections(updatedSections);
      resetItemFields();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateItem = async (sectionId: number, itemId: number) => {
    if (!editItem?.title || !editItem?.price) return setError('Título e preço são obrigatórios');
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('title', editItem.title);
    formData.append('description', editItem.description || '');
    formData.append('price', String(editItem.price));
    if (newItemImage) formData.append('image', newItemImage); // newItemImage é usado para a nova imagem de edição.

    try {
      const response = await fetch(`${MENUITEMS_URL}${itemId}/`, {
        method: 'PATCH',
        body: formData,
      });
      if (!response.ok) throw new Error('Erro ao atualizar item');
      const updatedItem = await response.json();
      const updatedSections = sections.map(sec =>
        sec.id === sectionId
          ? { ...sec, items: sec.items.map(it => it.id === itemId ? updatedItem : it) }
          : sec
      );
      setSections(updatedSections);
      setEditItem(null);
      setNewItemImage(null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteItem = async (sectionId: number, itemId: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${MENUITEMS_URL}${itemId}/`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Erro ao excluir item');
      const updatedSections = sections.map(sec =>
        sec.id === sectionId
          ? { ...sec, items: sec.items.filter(it => it.id !== itemId) }
          : sec
      );
      setSections(updatedSections);
      setDeleteItemId(null);
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
  };
  
  // --- Renderização das Novas Abas ---
  
  const renderDashboard = () => (
    <>
      <S.Title>📊 Visão Geral do Negócio</S.Title>
      <S.SectionsContainer>
        <S.Card>
          <S.SectionTitle>Faturamento (Mês)</S.SectionTitle>
          <S.BigMetric color={S.colors.green}>R$ 15.420,90</S.BigMetric>
          <p>Meta batida em 12%</p>
        </S.Card>
        <S.Card>
          <S.SectionTitle>Pedidos Pendentes</S.SectionTitle>
          <S.BigMetric color={S.colors.primary}>8</S.BigMetric>
          <p>Fila na cozinha e para entrega</p>
        </S.Card>
        <S.Card>
          <S.SectionTitle>Clientes Cadastrados</S.SectionTitle>
          <S.BigMetric color={S.colors.title}>1.245</S.BigMetric>
          <p>Aumento de 5% este mês</p>
        </S.Card>
      </S.SectionsContainer>
      
      <S.Card style={{ marginTop: '2rem' }}>
        <S.SectionTitle>Itens Mais Vendidos (Em Breve)</S.SectionTitle>
        <S.Placeholder>
            Gráfico de barras dos Top 5 Hambúrgueres... 
        </S.Placeholder>
      </S.Card>
    </>
  );
  
  const renderClients = () => (
    <>
      <S.Title>🧑‍🤝‍🧑 Gerenciamento de Clientes</S.Title>
      <S.Card>
        <S.SectionTitle>Lista de Clientes Recentes</S.SectionTitle>
        <S.Placeholder>
          <p>Aqui apareceriam dados como Nome, Último Pedido, Total Gasto e Opções de Ação (ex: Enviar cupom).</p>
          <S.Button variant="secondary" onClick={() => alert('Função de busca ativada!')}>
            <i className="ri-search-line"></i> Buscar Cliente (Em Breve)
          </S.Button>
        </S.Placeholder>
      </S.Card>
    </>
  );
  
  const renderOrders = () => (
    <>
      <S.Title>📋 Fluxo de Pedidos</S.Title>
      <S.Card>
        <S.SectionTitle>Pedidos em Andamento</S.SectionTitle>
        <S.Placeholder>
          Tabela em tempo real com pedidos (Recebido, Em Preparo, Pronto, Em Rota, Entregue).
        </S.Placeholder>
      </S.Card>
    </>
  );

  const renderSettings = () => (
    <>
      <S.Title>⚙️ Configurações da Loja</S.Title>
      <S.Card>
        <S.SectionTitle>Horário de Funcionamento</S.SectionTitle>
        <S.Placeholder>
          Formulários para editar o horário e dias de operação.
        </S.Placeholder>
      </S.Card>
    </>
  );
  
  // --- Renderização do Menu (Conteúdo Principal da lógica CRUD) ---
  const renderMenuContent = () => (
    <>
      <S.Title>🍔 Gerenciamento do Cardápio</S.Title>

      {/* Formulário de Adição de Seção */}
      <S.Card>
        <S.SectionTitle>Adicionar Nova Seção</S.SectionTitle>
        <S.SectionGrid>
          <S.Input
            type="text"
            value={newSectionName}
            onChange={(e) => setNewSectionName(e.target.value)}
            placeholder="Ex: Hambúrgueres Clássicos, Bebidas"
            aria-label="Nome da Seção"
          />
          <S.Button onClick={handleAddSection} disabled={loading}>
            <i className="ri-add-circle-line"></i> Criar Seção
          </S.Button>
        </S.SectionGrid>
      </S.Card>

      {/* Formulário de Adição de Item */}
      <S.Card>
        <S.SectionTitle>Adicionar Novo Item ao Cardápio</S.SectionTitle>
        <S.ItemFormGrid>
          <S.Select
            value={selectedSectionId || ''}
            onChange={(e) => setSelectedSectionId(Number(e.target.value))}
            aria-label="Selecionar Seção"
            disabled={sections.length === 0}
          >
            <option value="" disabled>Selecione uma Seção</option>
            {sections.map(sec => (
              <option key={sec.id} value={sec.id}>{sec.name}</option>
            ))}
          </S.Select>
          <S.Input
            type="text"
            value={newItemTitle}
            onChange={(e) => setNewItemTitle(e.target.value)}
            placeholder="Nome do Item (Ex: X-Salada)"
            aria-label="Título do Item"
          />
          <S.Input
            type="text"
            value={newItemDescription}
            onChange={(e) => setNewItemDescription(e.target.value)}
            placeholder="Descrição (Opcional)"
            aria-label="Descrição do Item"
          />
          <S.Input
            type="number"
            step="0.01"
            value={newItemPrice}
            onChange={(e) => setNewItemPrice(Number(e.target.value))}
            placeholder="Preço (Ex: 19.90)"
            aria-label="Preço do Item"
          />
          <S.Input
            type="file"
            accept="image/*"
            onChange={(e) => setNewItemImage(e.target.files?.[0] || null)}
            aria-label="Upload de Imagem"
          />
          <S.Button
            onClick={handleAddItem}
            disabled={loading || !selectedSectionId}
          >
            <i className="ri-shopping-cart-line"></i> Adicionar Item
          </S.Button>
        </S.ItemFormGrid>
      </S.Card>

      {/* Listagem de Seções e Itens */}
      <S.SectionsContainer menuLayout>
        {sections.map(section => (
          <S.Section key={section.id}>
            <S.SectionHeader>
              <S.SectionTitle>{section.name}</S.SectionTitle>
            </S.SectionHeader>
            <S.ItemList>
              {section.items.map(item => (
                <S.Item key={item.id}>
                  {editItem?.id === item.id ? (
                    <S.EditForm>
                      <S.Input
                        type="text"
                        value={editItem.title}
                        onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
                        placeholder="Título do Item"
                        aria-label="Título do Item"
                      />
                      <S.Input
                        type="text"
                        value={editItem.description || ''}
                        onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
                        placeholder="Descrição (opcional)"
                        aria-label="Descrição do Item"
                      />
                      <S.Input
                        type="number"
                        step="0.01"
                        value={editItem.price}
                        onChange={(e) => setEditItem({ ...editItem, price: Number(e.target.value) })}
                        placeholder="Preço"
                        aria-label="Preço do Item"
                      />
                      <S.Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setNewItemImage(e.target.files?.[0] || null)}
                        aria-label="Nova Imagem"
                      />
                      <S.ButtonGroup>
                        <S.Button
                          onClick={() => handleUpdateItem(section.id, item.id)}
                          disabled={loading}
                        >
                          <i className="ri-save-line"></i> Salvar
                        </S.Button>
                        <S.Button
                          onClick={() => { setEditItem(null); setNewItemImage(null); }}
                          disabled={loading}
                          variant="secondary"
                        >
                          Cancelar
                        </S.Button>
                      </S.ButtonGroup>
                    </S.EditForm>
                  ) : (
                    <>
                      <S.ItemInfo>
                        <S.ItemTitle>{item.title}</S.ItemTitle>
                        <S.ItemPrice>R$ {Number(item.price).toFixed(2).replace('.', ',')}</S.ItemPrice>
                        {item.description && <S.ItemDescription>{item.description}</S.ItemDescription>}
                      </S.ItemInfo>
                      <S.ButtonGroup>
                        <S.ActionButton
                          onClick={() => setEditItem(item)}
                          aria-label={`Editar ${item.title}`}
                        >
                          <i className="ri-edit-line"></i>
                        </S.ActionButton>
                        <S.ActionButton
                          onClick={() => setDeleteItemId(item.id)}
                          aria-label={`Excluir ${item.title}`}
                          variant="danger"
                        >
                          <i className="ri-delete-bin-line"></i>
                        </S.ActionButton>
                      </S.ButtonGroup>
                    </>
                  )}
                </S.Item>
              ))}
            </S.ItemList>
          </S.Section>
        ))}
      </S.SectionsContainer>
    </>
  );

  // --- Mapeamento do Conteúdo ---
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'menu':
        return renderMenuContent();
      case 'clients':
        return renderClients();
      case 'orders':
        return renderOrders();
      case 'settings':
        return renderSettings();
      default:
        return <S.SubTitle>Selecione uma opção no menu lateral.</S.SubTitle>;
    }
  }

  // --- Renderização Principal ---
  return (
    <S.AdminLayout>
      <S.Sidebar>
        <S.Logo>🔥 Burger Admin</S.Logo>
        <S.NavList>
          <S.NavItem active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')}>
            <i className="ri-dashboard-line"></i> Dashboard
          </S.NavItem>
          <S.NavItem active={activeTab === 'menu'} onClick={() => setActiveTab('menu')}>
            <i className="ri-booklet-line"></i> Cardápio (Menu)
          </S.NavItem>
          <S.NavItem active={activeTab === 'clients'} onClick={() => setActiveTab('clients')}>
            <i className="ri-group-line"></i> Clientes
          </S.NavItem>
          <S.NavItem active={activeTab === 'orders'} onClick={() => setActiveTab('orders')}>
            <i className="ri-clipboard-line"></i> Pedidos
          </S.NavItem>
          <S.NavItem active={activeTab === 'settings'} onClick={() => setActiveTab('settings')}>
            <i className="ri-settings-3-line"></i> Configurações
          </S.NavItem>
        </S.NavList>
      </S.Sidebar>

      <S.MainContent>
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
        {loading && <S.Loading>Carregando...</S.Loading>}
        
        {renderContent()}

        {/* Modal de Confirmação de Exclusão (Mantido) */}
        {deleteItemId && (
          <S.Modal>
            <S.ModalContent>
              <S.ModalTitle>Confirmar Exclusão</S.ModalTitle>
              <p>Tem certeza de que deseja excluir este item?</p>
              <S.ButtonGroup>
                <S.Button
                  onClick={() => {
                    const section = sections.find(sec => sec.items.some(it => it.id === deleteItemId));
                    if (section) handleDeleteItem(section.id, deleteItemId);
                  }}
                  disabled={loading}
                  variant="danger"
                >
                  <i className="ri-delete-bin-line"></i> Excluir
                </S.Button>
                <S.Button onClick={() => setDeleteItemId(null)} disabled={loading} variant="secondary">
                  Cancelar
                </S.Button>
              </S.ButtonGroup>
            </S.ModalContent>
          </S.Modal>
        )}
      </S.MainContent>
    </S.AdminLayout>
  );
};

export default Admin;