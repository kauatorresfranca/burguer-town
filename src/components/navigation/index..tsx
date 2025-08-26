import * as S from './styles';

const Navigation = () => {
    return (
        <S.Nav>
            <S.NavItem><i className="fas fa-home"></i>Inicio</S.NavItem>
            <S.NavItem><i className="fas fa-user"></i>Promoções</S.NavItem>
            <S.NavItem><i className="fas fa-utensils"></i>Pedidos</S.NavItem>
            <S.NavItem><i className="fas fa-envelope"></i>Conta</S.NavItem>
        </S.Nav>
    )
}

export default Navigation;
