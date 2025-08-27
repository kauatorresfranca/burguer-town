import styled from "styled-components";
import { colors } from "../../../styles";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9rem;
    padding: 1.5rem;
`;

export const NavItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem 1rem;
    background-color: ${colors.outline};
    font-weight: bold;
    color: ${colors.primary};
    border-radius: 10px;

    &:hover {
        background-color: ${colors.primary};
        color: ${colors.background};
        cursor: pointer;
    }

    i {
        font-size: 1.5rem;
        font-weight: 500;
    }
`;
