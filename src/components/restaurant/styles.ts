import styled from "styled-components";
import { colors } from "../../../styles";

export const Restaurant = styled.div`
    display: flex;
    align-items: center;

    img {
        position: absolute;
        transform: translate(0, -30%);
        top: 0;
        left: 40px;
        width: 148px;
        height: 148px;
        padding: 0.2rem;
        background-color: ${colors.background};
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
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
    align-items: center;
    gap: 1rem;

    p {
        color: ${colors.text};
        font-size: 0.9rem;
        font-weight: 400;

        //paragrafo de horario
        &#time {
            font-weight: 500;
            color: ${colors.green};
        }

        //paragrafo de localizacao
        &#location {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        //paragrafo de mais informacoes
        &#more-info {
            font-weight: 600;
        }
    }

    .circle {
        font-size: 0.5rem;
        color: ${colors.title};
    }
`;