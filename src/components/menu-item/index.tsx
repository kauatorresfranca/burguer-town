// MenuItem.tsx

import { useState } from 'react';
import Modal from '../modal';
import * as S from './styles';
import Button from '../button';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';

type MenuItemProps = {
  title: string;
  description: string;
  price: number | string; // Permitir string para lidar com API
  image: string;
};

const MenuItem = ({ title, description, price, image }: MenuItemProps) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Estado local para a quantidade na Modal
  const [itemQuantity, setItemQuantity] = useState(1); 

  const DecreaseQty = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  }

  const increaseQty = () => {
    // Limite de 20 é uma boa prática
    if (itemQuantity < 20) {
      setItemQuantity(itemQuantity + 1);
    }
  }

  const AddToCart = () => {
    dispatch(
      addItem({
        id: title, // Considere usar um ID real do backend
        title,
        description,
        price: Number(price), // Converte para número
        image,
        // ✅ Envia a quantidade atualizada
        quantity: itemQuantity, 
      })
    );
    // Fecha a modal e reseta a quantidade após adicionar
    setModalIsOpen(false);
    setItemQuantity(1);
  };

  const currentPrice = Number(price) * itemQuantity;

  return (
    <>
      <S.MenuItem onClick={() => setModalIsOpen(true)}>
        <S.MenuItemImage src={image} alt={title} />
        <S.MenuItemTitleGroup>
          <div>
            <S.MenuItemTitle>{title}</S.MenuItemTitle>
            <S.MenuItemDescription>{description}</S.MenuItemDescription>
          </div>
          <S.MenuItemPrice>R$ {Number(price).toFixed(2).replace('.', ',')}</S.MenuItemPrice>
        </S.MenuItemTitleGroup>
      </S.MenuItem>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <S.ModalContent>
          <S.ModalImage src={image} alt={title} />
          <S.ModalContentInfo>
            <S.ModalTitle>{title}</S.ModalTitle>
            <S.ModalDescription>{description}</S.ModalDescription>
            {/* Exibe o preço unitário ou um texto descritivo */}
            <S.ModalPrice>R$ {Number(price).toFixed(2).replace('.', ',') }</S.ModalPrice>
            <S.ModalButtonGroup>
              <div>
                <i className="ri-subtract-line" onClick={DecreaseQty}></i>
                {/* Exibe a quantidade local */}
                {itemQuantity} 
                <i className="ri-add-line" onClick={increaseQty}></i>
              </div>
              <Button onClick={AddToCart}>
                <>Adicionar ao carrinho <S.ModalCurrentPrice>R$ {currentPrice.toFixed(2).replace('.', ',') }</S.ModalCurrentPrice></>
              </Button>
            </S.ModalButtonGroup>
          </S.ModalContentInfo>
        </S.ModalContent>
      </Modal>
    </>
  );
};

export default MenuItem;