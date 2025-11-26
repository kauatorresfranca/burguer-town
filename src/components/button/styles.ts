import styled from "styled-components";
import { colors } from "../../../styles";

export const Button = styled.button`
    display: flex;
    background-color: ${colors.primary};
    color: ${colors.background};
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: ${colors.background};
        color: ${colors.primary};
    }
`;
