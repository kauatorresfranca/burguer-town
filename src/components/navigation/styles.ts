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
    font-weight: bold;
    color: ${colors.text};
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &.active {
        background-color: ${colors.primary};
        color: ${colors.background};
    }

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
