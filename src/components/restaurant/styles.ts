import styled from "styled-components";
import { colors } from "../../../styles";

export const Restaurant = styled.div`
    display: flex;
    align-items: center;
    background-color: ${colors.background};
`;

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.1rem;
    padding-top: 1rem;
    padding-left: 210px;

    &:hover {
        cursor: pointer;
    }

    h1 {
        color: ${colors.title};
    }
`;

export const RestaurantInfoDetails = styled.div`
    display: flex;
    gap: 1rem;

    p {
        color: ${colors.text};

        &#horario {
            color: #10b981;
        }
    }
`;