import * as S from './styles';
import banner from '../../assets/banner.jpeg';

const Banner = () => {
    return (
        <S.BannerContainer>
            <S.BannerImg src={banner} alt="Delicious Burger" />
        </S.BannerContainer>
    );
};

export default Banner;
