// styles.ts (Repaginado com UI/UX melhor: responsividade, acessibilidade, espaçamentos consistentes, hover/focus states, cores suaves, bordas arredondadas, e layout flex/grid para melhor fluxo)
import styled from 'styled-components';
import { colors } from '../../../styles'; // Assumindo que colors tem valores como background: '#f5f5f5', text: '#333', primary: '#007bff', etc.

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background-color: ${colors.background};
  color: ${colors.text};
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

export const FormSection = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Section = styled(FormSection)`
  background-color: ${colors.outline}; // Suavizado para melhor contraste
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${colors.text};
  margin-bottom: 1rem;
  border-bottom: 2px solid ${colors.primary};
  padding-bottom: 0.5rem;
  width: 100%;
`;

export const SubTitle = styled.h3`
  font-size: 1.4rem;
  color: ${colors.text};
  margin-bottom: 0.5rem;
  width: 100%;
`;

export const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${colors.outline};
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  span {
    font-size: 1rem;
    color: ${colors.text};
  }
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid ${colors.outline};
  background-color: white;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  flex: 1;
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }

  &[type="file"] {
    padding: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
  }
`;

export const Button = styled.button`
  background-color: ${colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  min-width: 150px;

  &:hover {
    background-color: darken(${colors.primary}, 10%);
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: ${colors.outline};
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Loading = styled.div`
  font-size: 1rem;
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 1rem;
`;