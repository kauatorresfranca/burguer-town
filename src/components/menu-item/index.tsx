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

  const AddToCart = () => {
    dispatch(
      addItem({
        id: title, // Considere usar um ID real do backend
        title,
        description,
        price: Number(price), // Converte para número
        image,
      })
    );
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
          <S.MenuItemPrice>R$ {Number(price).toFixed(2).replace('.', ',')}</S.MenuItemPrice>
        </S.MenuItemTitleGroup>
      </S.MenuItem>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <S.ModalContent>
          <S.ModalImage src={image} alt={title} />
          <S.ModalContentInfo>
            <S.ModalTitle>{title}</S.ModalTitle>
            <S.ModalDescription>{description}</S.ModalDescription>
            <S.ModalPrice>R$ {Number(price).toFixed(2).replace('.', ',')}</S.ModalPrice>
            <S.ModalButtonGroup>
              <div>
                <i className="ri-subtract-line"></i>
                1
                <i className="ri-add-line"></i>
              </div>
              <Button onClick={AddToCart}>Adicionar ao carrinho</Button>
            </S.ModalButtonGroup>
          </S.ModalContentInfo>
        </S.ModalContent>
      </Modal>
    </>
  );
};

export default MenuItem;