import styled, { css } from 'styled-components';

export const colors = {
  primary: "#FF6347", // Tomato Red
  background: "#F5F5F5", // Light Gray
  title: "#333333", // Dark Gray
  text: "#666666", // Medium Gray
  outline: "#CCCCCC", // Light Outline
  green: "#10b981", // Emerald Green
  red: "#FF0000", // Bright Red
  sidebarBg: "#222222", // Sidebar Darker Background
  sidebarText: "#FFFFFF", // Sidebar White Text
  hoverBg: "#333333", // Sidebar Hover
  cardBg: "#FFFFFF",
};

// --- Controles de Formulário e Botões (Movidos para cima para evitar o erro de declaração) ---

export const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid ${colors.outline};
  background: #ffffff;
  color: ${colors.text};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Inter', sans-serif;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(255, 99, 71, 0.3);
  }

  &[type="file"] {
    padding: 0.5rem;
  }
`;

export const Select = styled.select`
  ${Input}
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${colors.text.replace('#', '%23')}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
`;


export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
  font-family: 'Inter', sans-serif;
  min-width: 150px;

  ${({ variant = 'primary' }) =>
    variant === 'primary'
      ? css`
          background: ${colors.primary};
          color: white;
          &:hover {
            background: #e5533d;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 99, 71, 0.4);
          }
        `
      : variant === 'secondary'
      ? css`
          background: ${colors.outline};
          color: ${colors.title};
          &:hover {
            background: #b3b3b3;
            transform: translateY(-2px);
          }
        `
      : css`
          background: ${colors.red};
          color: white;
          &:hover {
            background: #cc0000;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 0, 0, 0.3);
          }
        `}

  &:disabled {
    background: ${colors.outline};
    color: ${colors.text};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const ActionButton = styled.button<{ variant?: 'primary' | 'danger' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${({ variant = 'primary' }) =>
    variant === 'primary' ? colors.primary : colors.red};
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background: ${({ variant = 'primary' }) =>
      variant === 'primary' ? '#e5533d' : '#cc0000'};
    transform: scale(1.1);
  }

  i {
    font-size: 1.1rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
  
  @media (max-width: 600px) {
    width: 100%;
    ${Button} {
      width: 100%;
    }
  }
`;


// --- Layout Principal ---

export const AdminLayout = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background-color: ${colors.background};
`;

export const Sidebar = styled.aside`
  width: 280px;
  background-color: ${colors.sidebarBg};
  color: ${colors.sidebarText};
  padding: 2rem 1.5rem;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
  
  @media (max-width: 1024px) {
    width: 220px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${colors.primary};
  margin-bottom: 3rem;
  text-align: center;
  letter-spacing: 0.5px;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;

  i {
    font-size: 1.25rem;
  }

  background-color: ${({ active }) => (active ? colors.primary : 'transparent')};
  color: ${({ active }) => (active ? colors.sidebarText : colors.outline)};
  box-shadow: ${({ active }) => (active ? '0 4px 10px rgba(255, 99, 71, 0.3)' : 'none')};

  &:hover {
    background-color: ${colors.hoverBg};
    color: ${colors.sidebarText};
    box-shadow: none;
  }
`;

export const MainContent = styled.main`
  flex-grow: 1;
  padding: 2.5rem 3rem;
  overflow-y: auto;
  
  @media (max-width: 1024px) {
    padding: 1.5rem 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// --- Títulos e Mensagens ---

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.title};
  margin-bottom: 2.5rem;
  text-align: left;
  border-bottom: 4px solid ${colors.primary};
  padding-bottom: 0.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.title};
  margin-bottom: 1rem;
`;

export const SubTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${colors.text};
  margin-bottom: 0.75rem;
`;

export const ErrorMessage = styled.div`
  background: ${colors.red};
  color: white;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(255, 0, 0, 0.2);
`;

export const Loading = styled.div`
  font-size: 1rem;
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 1.5rem;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;

// --- Componentes de Dados e Layout (Card/Seções) ---

export const Card = styled.section`
  background: ${colors.cardBg};
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08); /* Sombra mais suave */
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const Placeholder = styled.div`
    background-color: ${colors.background};
    border: 2px dashed ${colors.outline};
    border-radius: 8px;
    padding: 2rem;
    text-align: center;
    color: ${colors.text};
    font-style: italic;
    
    p {
        margin-bottom: 1rem;
    }
`;

export const BigMetric = styled.p<{ color: string }>`
    font-size: 3rem;
    font-weight: 700;
    color: ${({ color }) => color};
    margin: 0.5rem 0;
    line-height: 1;
`;

export const FormSection = styled(Card)``; // Usando Card como base

export const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  align-items: center;
  
  ${Input}:nth-child(2) { /* Título do Item */
      grid-column: span 2;
  }
  ${Input}:nth-child(3) { /* Descrição */
      grid-column: span 3;
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    ${Input}:nth-child(2), ${Input}:nth-child(3) {
      grid-column: span 2;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    ${Input}:nth-child(2), ${Input}:nth-child(3) {
      grid-column: span 1;
    }
  }
`;

export const SectionsContainer = styled.div<{ menuLayout?: boolean }>`
  display: ${({ menuLayout }) => (menuLayout ? 'block' : 'grid')};
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

export const Section = styled(Card)`
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  
  ${SectionsContainer} & {
    margin-bottom: 0;
  }
`;

export const SectionHeader = styled.div`
  border-bottom: 2px solid ${colors.outline};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
`;

export const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px dashed ${colors.outline};
  transition: background-color 0.2s ease;
  flex-wrap: wrap;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:hover {
    background-color: ${colors.background};
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`;

export const ItemTitle = styled.span`
  font-size: 1.1rem;
  color: ${colors.title};
  font-weight: 600;
`;

export const ItemDescription = styled.p`
  font-size: 0.9rem;
  color: ${colors.text};
  margin: 0;
  margin-top: 0.25rem;
`;

export const ItemPrice = styled.span`
  font-size: 1.1rem;
  color: ${colors.primary};
  font-weight: 700;
`;

export const EditForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  width: 100%;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

// --- Modal ---

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 450px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease;

  p {
    color: ${colors.text};
    margin-bottom: 1.5rem;
  }

  ${ButtonGroup} {
    justify-content: flex-end;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.title};
  margin-bottom: 1rem;
`;