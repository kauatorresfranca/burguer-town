import * as S from './styles';
import hamburguer from '../../assets/hamburguer.jpg';

const Cart = () => {
    return (
        <S.Cart>
            <S.CartDelivery>
                <S.CartDeliveryFreight>
                    <i className="ri-map-pin-2-line location"></i>
                    <S.CartDeliveryTitle>Calcular taxa e tempo de entrega</S.CartDeliveryTitle>
                    <i className="ri-arrow-right-s-line arrow"></i>
                </S.CartDeliveryFreight>
                <S.CartDeliveryMessage>
                    <p><span>Entrega grátis</span> para pedidos acima de R$ 50,00</p>
                </S.CartDeliveryMessage>
            </S.CartDelivery>
            <S.CartItems>
                <h3>Sua Sacola</h3>
                <S.CartItem>
                    <S.FirstLine>
                        <S.CartItemImageGroup>
                            <S.CartItemImage src={hamburguer} alt="Product Image" />
                            <S.CartItemTitle>Product Title</S.CartItemTitle>
                        </S.CartItemImageGroup>
                        <i className="ri-delete-bin-line delete"></i>
                    </S.FirstLine>
                    <S.SecondLine>
                        <S.CartItemQuantity>
                            <i className="ri-subtract-line"></i>
                            1
                            <i className="ri-add-line"></i>
                        </S.CartItemQuantity>
                        <S.CartItemPrice>R$ 27.00</S.CartItemPrice>
                    </S.SecondLine>
                </S.CartItem>
            </S.CartItems>
        </S.Cart>
    );
};

export default Cart;
