import { useState } from 'react';
import Modal from '../modal';
import * as  S from './styles'
import Button from '../button';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';

type MenuItemProps = {
    title: string;
    description: string;
    price: number;
    image: string;
}

const MenuItem = ({ title, description, price, image }: MenuItemProps) => {

    const dispatch = useDispatch();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const AddToCart = () => {
  dispatch(addItem({ 
    id: title, // aqui pode ser `id` real do produto
    title, 
    description, 
    price, 
    image 
  }));
};

    return (
        <>
            <S.MenuItem onClick={() => setModalIsOpen(true)}>
                <S.MenuItemImage src={image} alt={title} />
                <S.MenuItemTitleGroup>
                    <div>
                        <S.MenuItemTitle>{title}</S.MenuItemTitle>
                        <S.MenuItemDescription>{description}</S.MenuItemDescription>
                    </div>
                    <S.MenuItemPrice>R$ {price.toFixed(2).replace('.', ',')}</S.MenuItemPrice>
                </S.MenuItemTitleGroup>
            </S.MenuItem>
            <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} >
                <S.ModalContent>
                    <S.ModalTitle>{title}</S.ModalTitle>
                    <S.ModalDescription>{description}</S.ModalDescription>
                    <S.ModalPrice>R$ {price.toFixed(2).replace('.', ',')}</S.ModalPrice>
                    <Button onClick={() => {AddToCart()}}>Adicionar ao carrinho</Button>
                </S.ModalContent>
            </Modal>
        </>
    )
}

export default MenuItem
