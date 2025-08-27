import * as S from './styles'

import Banner from '../../components/banner/index';
import Navigation  from '../../components/navigation/index.';
import Restaurant from '../../components/restaurant';
import Cart from '../../components/cart';

const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <S.Layout>
                <S.Main >
                    <Restaurant />
                </S.Main>
                <S.Aside>
                    <Cart />
                </S.Aside>
            </S.Layout>
        </>
    );
};

export default Home;
