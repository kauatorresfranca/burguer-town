import { useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

const navItems = [
    { icon: "ri-home-4-fill", label: "Inicio", path: "/" },
    { icon: "ri-discount-percent-line", label: "Promoções", path: "/promocoes" },
    { icon: "ri-shopping-bag-4-line", label: "Pedidos", path: "/pedidos" },
    { icon: "ri-user-3-fill", label: "Conta", path: "/conta" },
];

const Navigation = () => {
    const [activeItem, setActiveItem] = useState<string | null>("Inicio");
    const navigate = useNavigate();

    const navigateTo = (item: { label: string, path: string }) => {
        setActiveItem(item.label);
        navigate(item.path); // navegação correta
    };

    return (
        <S.Nav>
            {navItems.map((item) => (
                <S.NavItem
                    key={item.label}
                    className={activeItem === item.label ? "active" : ""}
                    onClick={() => navigateTo(item)}
                >
                    <i className={item.icon}></i>{item.label}
                </S.NavItem>
            ))}
        </S.Nav>
    );
};

export default Navigation;
