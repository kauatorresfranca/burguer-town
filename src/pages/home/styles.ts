import styled from "styled-components"
import { colors } from "../../../styles";

export const Layout = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
`;

export const Main = styled.main`
    border-radius: 10px;
    position: relative;

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
    }
`;

export const Aside = styled.aside`
    padding: 2rem;
    background-color: #e2cfcfff;
    border-radius: 10px;
`;
