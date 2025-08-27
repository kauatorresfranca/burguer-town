import styled from 'styled-components'
import { colors } from '../../../styles';


export const BannerContainer = styled.div`
    position: relative;
    overflow: hidden;
    padding: 0.2rem;
    background-color: ${colors.background};
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BannerImg = styled.img`
    width: 100%;
    height: 320px;
    object-fit: cover;
    filter: brightness(0.9);
    border-radius: 10px;
`;
