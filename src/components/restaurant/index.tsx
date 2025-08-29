import * as S from './styles';
import logo from '../../assets/BEEF TOWN.png';
import Modal from '../modal';
import { useState } from 'react';

const Restaurant = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    return (
        <>
        <S.Restaurant>
            <img src={logo} alt="Imagem de exemplo" />
            <S.RestaurantInfo onClick={() => setModalIsOpen(true)}>
                <h1>BURGUER TOWN</h1>
                <S.RestaurantInfoDetails>
                    <p id='time'>Aberto até as 22:00</p>
                    <i className="ri-checkbox-blank-circle-fill circle"></i>
                    <p id='location'><i className="ri-map-pin-2-fill"></i>Maceió - AL</p>
                    <i className="ri-checkbox-blank-circle-fill circle"></i>
                    <p id='more-info'>Mais Informações</p>
                </S.RestaurantInfoDetails>
            </S.RestaurantInfo>
        </S.Restaurant>
        <Modal title='mais informações' isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        </Modal>
        </>
    );
};

export default Restaurant;
