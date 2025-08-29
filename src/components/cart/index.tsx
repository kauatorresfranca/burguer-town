import * as S from './styles';
import hamburguerImage from '../../assets/hamburguer.jpg';
import Button from '../button';

const CartItems = [
    {
        id: 1,
        title: "Hamburguer",
        image: hamburguerImage,
        price: 27.00,
        quantity: 1
    },
    {
        id: 2,
        title: "Batata Frita",
        image: hamburguerImage,
        price: 15.00,
        quantity: 1
    }
]

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
                <h3>Sua Sacola (2)</h3>
                {CartItems.map(item => (
                    <S.CartItem key={item.id}>
                    <S.FirstLine>
                        <S.CartItemImageGroup>
                            <S.CartItemImage src={item.image} alt="Product Image" />
                            <S.CartItemTitle>{item.title}</S.CartItemTitle>
                        </S.CartItemImageGroup>
                        <i className="ri-delete-bin-line delete"></i>
                    </S.FirstLine>
                    <S.SecondLine>
                        <S.CartItemQuantity>
                            <i className="ri-subtract-line"></i>
                            1
                            <i className="ri-add-line"></i>
                        </S.CartItemQuantity>
                        <S.CartItemPrice>R$ {item.price.toFixed(2)}</S.CartItemPrice>
                    </S.SecondLine>
                </S.CartItem>
                ))}
            </S.CartItems>
            <S.CartPrice>
                <div>
                    <S.CartPriceLabel>Subtotal</S.CartPriceLabel>
                    <S.CartPriceValue>R$ 42,00</S.CartPriceValue>
                </div>
                <div>
                    <S.CartPriceLabel>Taxa de Entrega</S.CartPriceLabel>
                    <S.CartPriceValue>R$ 2,00</S.CartPriceValue>
                </div>
                <div>
                    <S.CartPriceLabel className='total'>Total</S.CartPriceLabel>
                    <S.CartPriceValue className='total'>R$ 44,00</S.CartPriceValue>
                </div>
            </S.CartPrice>
            <S.CartCoupon>
                <S.CartCouponContent>
                    <i className="ri-coupon-line coupon"></i>
                    <S.CartCouponTitleGroup>
                        <S.CartCouponTitle>Que tal um cupom ?</S.CartCouponTitle>
                        <S.CartCouponText>1 cupom disponível</S.CartCouponText>
                    </S.CartCouponTitleGroup>
                </S.CartCouponContent>
                <i className="ri-arrow-right-s-line arrow"></i>
            </S.CartCoupon>
            <S.CartCheckout>
                <Button>Finalizar Compra</Button>
            </S.CartCheckout>
        </S.Cart>
    );
};

export default Cart;
