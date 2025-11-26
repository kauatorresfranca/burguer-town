import { useState, useEffect } from 'react';
import * as S from './styles';
import Banner from '../../components/banner';
import Restaurant from '../../components/restaurant';
import Cart from '../../components/cart';
import MenuSection from '../../components/menu-section';

type MenuItemType = { id: number; title: string; description: string; price: number; image: string };
type SectionType = { name: string; items: MenuItemType[] };

const Home = () => {
    const [sections, setSections] = useState<SectionType[]>([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/sections')
            .then(response => response.json())
            .then(data => setSections(data))
            .catch(error => console.error('Erro ao carregar seções:', error));
    }, []);

    return (
        <>
            <Banner />
            <S.Layout>
                <S.Main>
                    <Restaurant />
                    <MenuSection Sections={sections} />
                </S.Main>
                <S.Aside>
                    <Cart />
                </S.Aside>
            </S.Layout>
        </>
    );
};

export default Home;