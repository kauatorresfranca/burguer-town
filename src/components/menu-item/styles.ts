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
  gap: 3.5rem;
  max-height: 128px;
`

export const MenuItemPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.text};
`;

export const ModalCurrentPrice = styled.span`
  margin-left: 0.5rem;
  font-weight: 600;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: flex-start;
  height: 424px;
  width: 100%;
  gap: 2rem;
`;

export const ModalContentInfo = styled.div`
  position: relative;
  height: 100%;
  width: 370px;
`;

export const ModalImage = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 8px;
`;

export const ModalTitle = styled.h3`
  color: ${colors.title};
  font-weight: 500;
  font-size: 18px;
  margin: 0;
`;

export const ModalDescription = styled.p`
  margin-top: 1rem;
  font-weight: 200;
  font-size: 14px;
  color: ${colors.text};
`;

export const ModalPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.text};
`;

export const ModalButtonGroup = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
