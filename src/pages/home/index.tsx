import * as S from './styles'

import Banner from '../../components/banner/index';
import Navigation  from '../../components/navigation/index.';
import Restaurant from '../../components/restaurant';

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
                    carrinho
                </S.Aside>
            </S.Layout>
        </>
    );
};

export default Home;
