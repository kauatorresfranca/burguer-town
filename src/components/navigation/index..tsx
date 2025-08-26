import * as S from './styles';

const navItems = [
    { icon: "ri-home-4-fill", label: "Inicio" },
    { icon: "ri-discount-percent-line", label: "Promoções" },
    { icon: "ri-shopping-bag-4-line", label: "Pedidos" },
    { icon: "ri-user-3-fill", label: "Conta" },
];

const Navigation = () => {
    return (
        <S.Nav>
            {
                navItems.map((item) => (
                    <S.NavItem key={item.label}>
                        <i className={item.icon}></i>{item.label}
                    </S.NavItem>
                ))
            }
        </S.Nav>
    )
}

export default Navigation;
