import styled from "styled-components"

export const Layout = styled.div`
    display: grid;
    grid-template-columns: 6fr 2fr;
    gap: 2rem;
`;

export const Main = styled.main`
    border-radius: 10px;
    position: relative;
`;

export const Aside = styled.aside`
    position: sticky;
    top: 0;
    padding-top: 1.5rem;
    border-radius: 10px;
`;
