import * as S from './styles';
import logo from '../../assets/BEEF TOWN.png';

const Restaurant = () => {
    return (
        <S.Restaurant>
            <img src={logo} alt="Imagem de exemplo" />
            <S.RestaurantInfo>
                <h1>BURGUER TOWN</h1>
                <S.RestaurantInfoDetails>
                    <p id='time'>Aberto até as 22:00</p>
                    <p id='location'><i className="ri-map-pin-2-fill"></i>Maceió - AL</p>
                    <p id='more-info'>Mais Informações</p>
                </S.RestaurantInfoDetails>
            </S.RestaurantInfo>
        </S.Restaurant> 
    );
};

export default Restaurant;
