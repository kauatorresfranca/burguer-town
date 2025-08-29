import styled from 'styled-components';
import { colors } from '../../../styles';

export const MenuSection = styled.div`
  padding-top: 16px;
`;

export const MenuSectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 12px;
  color: ${colors.title};
`;

export const MenuSectionList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 18px;
  padding: 8px 0;
`;
