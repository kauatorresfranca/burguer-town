import styled from "styled-components";
import { colors } from "../../../styles";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
`;

export const NavItem = styled.div`
    padding: 0.5rem 1rem;
    background-color: ${colors.outline};
    font-weight: bold;
    color: ${colors.primary};
    border-radius: 10px;
`;
