import * as S from './styles';
import logo from '../../assets/BEEF TOWN.png';

const Restaurant = () => {
    return (
        <S.Restaurant>
            <img src={logo} alt="Imagem de exemplo" />
            <S.RestaurantInfo>
                <h1>BEEF TOWN</h1>
                <S.RestaurantInfoDetails>
                    <p id='horario'>Aberto até as 22:00</p>
                    <p>Maceió - AL</p>
                    <p>Mais Informações</p>
                </S.RestaurantInfoDetails>
            </S.RestaurantInfo>
        </S.Restaurant> 
    );
};

export default Restaurant;
