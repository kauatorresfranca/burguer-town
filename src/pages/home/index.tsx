import * as S from './styles'

import Banner from '../../components/banner/index';
import Navigation  from '../../components/navigation/index.';
import Restaurant from '../../components/restaurant';
import Cart from '../../components/cart';
import MenuSection from '../../components/menu-section/index';
import hamburgerImage from '../../assets/hamburguer.jpg'

const Sections = [
    {
        id: 1,
        name: 'Menu',
        items: [
            {
                id: 1,
                title: "Hamburger da Galera",
                description: "This is a delicious hamburger.",
                price: 27.00,
                image: hamburgerImage
            },
            {
                id: 2,
                title: "Batata Frita",
                description: "Crispy french fries.",
                price: 15.00,
                image: hamburgerImage
            },
            {
                id: 3,
                title: "Refrigerante",
                description: "Chilled soft drink.",
                price: 10.00,
                image: hamburgerImage
            }
        ]
    },
    {
        id: 2,
        name: 'Bebidas',
        items: [
            {
                id: 1,
                title: "Coca-Cola",
                description: "Refreshing soft drink.",
                price: 10.00,
                image: hamburgerImage
            },
            {
                id: 2,
                title: "Suco de Laranja",
                description: "Freshly squeezed orange juice.",
                price: 12.00,
                image: hamburgerImage
            },
            {
                id: 3,
                title: "Água Mineral",
                description: "Pure mineral water.",
                price: 5.00,
                image: hamburgerImage
            }
        ]
    }
];

const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <S.Layout>
                <S.Main >
                    <Restaurant />
                    <MenuSection Sections={Sections} />
                </S.Main>
                <S.Aside>
                    <Cart />
                </S.Aside>
            </S.Layout>
        </>
    );
};

export default Home;
