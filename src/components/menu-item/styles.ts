import styled from "styled-components";
import { colors } from "../../../styles";

export const MenuItem = styled.div`
  display: flex;
  align-items: flex-start;
  height: 170px;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${colors.outline};
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const MenuItemImage = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 8px;
  margin-right: 1.2rem;
`;

export const MenuItemTitle = styled.h3`
  color: ${colors.title};
  font-weight: 500;
  font-size: 18px;
  margin: 0;
`;

export const MenuItemDescription = styled.p`
  margin-top: 1rem;    
  font-weight: 200;
  font-size: 14px;
  color: ${colors.text};
`;

export const MenuItemTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.6rem;
  height: 100%;
`

export const MenuItemPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.text};
`;
