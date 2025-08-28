import styled from "styled-components";
import { colors } from "../../../styles";

export const Cart = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    border-radius: 10px;
    border: 1px solid ${colors.outline};
`;

export const CartDelivery = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CartDeliveryFreight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0.8rem;
    width: 100%;
    gap: 0.5rem;

    &:hover {
        cursor: pointer;
    }

    i {
        font-size: 1.2rem;

        &.location {
            color: ${colors.text};
        }

        &.arrow {
            color: ${colors.primary};
        }
    }
`;

export const CartDeliveryMessage = styled.p`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0.5rem 0;
    border-top: 1px dashed ${colors.outline};
    border-bottom: 1px dashed ${colors.outline};
    color: ${colors.text};
    font-size: 0.7rem;

    span {
        color: ${colors.green};
        font-weight: 500;
    }
`;

export const CartDeliveryTitle = styled.h3`
    color: ${colors.title};
    font-size: 0.8rem;
    font-weight: 500;
`;

export const CartDeliveryText = styled.p`
    color: ${colors.text};
`;

export const CartItems = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.8rem;
    gap: 0.5rem;
    height: 360px;
    width: 100%;
`;

export const CartItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid ${colors.outline};
`;

export const CartItemImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 8px;
`;

export const CartItemDetails = styled.div`
    flex: 1;
    margin-left: 0.5rem;
`;

export const CartItemTitle = styled.h4`
    color: ${colors.title};
    font-size: 0.9rem;
    font-weight: 500;
`;

export const CartItemQuantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    i {
        font-size: 1rem;
        color: ${colors.text};
    }
`;

export const CartItemPrice = styled.p`
    color: ${colors.text};
    font-size: 0.8rem;
`;

export const FirstLine = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .delete {
        color: ${colors.red};

        &:hover {
            cursor: pointer;
        }
    }
`;

export const CartItemImageGroup = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
`;

export const SecondLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 50px;

    i {
        font-size: 1.1rem;
        color: ${colors.text};

        &:hover {
            cursor: pointer;
        }
    }
`;
