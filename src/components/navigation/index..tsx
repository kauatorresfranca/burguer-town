import { useState } from 'react';
import * as S from './styles';

const navItems = [
    { icon: "ri-home-4-fill", label: "Inicio" },
    { icon: "ri-discount-percent-line", label: "Promoções" },
    { icon: "ri-shopping-bag-4-line", label: "Pedidos" },
    { icon: "ri-user-3-fill", label: "Conta" },
];

const Navigation = () => {

    const [activeItem, setActiveItem] = useState<string | null>("Inicio");

    return (
        <S.Nav>
            {
                navItems.map((item) => (
                    <S.NavItem key={item.label} className={activeItem === item.label ? "active" : ""} onClick={() => setActiveItem(item.label)}>
                        <i className={item.icon}></i>{item.label}
                    </S.NavItem>
                ))
            }
        </S.Nav>
    )
}

export default Navigation;
