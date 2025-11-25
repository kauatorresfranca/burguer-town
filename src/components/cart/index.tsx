import * as S from './styles';
import Button from '../button';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { removeItem, increaseQty, decreaseQty, selectCartItems, selectCartTotal, clearCart } from '../../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  // pega os itens e o subtotal
  const cartItems = useSelector((state: RootState) => selectCartItems(state));
  const subtotal = useSelector((state: RootState) => selectCartTotal(state));

  // regra da taxa de entrega
  const deliveryFee = subtotal >= 50 ? 0 : 2;
  const total = subtotal + deliveryFee;


  const FinishPurchase = () => {
    Navigate('/checkout');
  }

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
  {cartItems.length > 0 ? (
    <>
      <S.CartItemsTitle>
        <h3>Sua Sacola ({cartItems.length})</h3>
        <p onClick={() => dispatch(clearCart())}>Limpar</p>
      </S.CartItemsTitle>
      {cartItems.map(item => (
        <S.CartItem key={item.id}>
          <S.FirstLine>
            <S.CartItemImageGroup>
              <S.CartItemImage src={item.image} alt={item.title} />
              <S.CartItemTitle>{item.title}</S.CartItemTitle>
            </S.CartItemImageGroup>
            <i
              className="ri-delete-bin-line delete"
              onClick={() => dispatch(removeItem(item.id))}
            ></i>
          </S.FirstLine>

          <S.SecondLine>
            <S.CartItemQuantity>
              <i
                className="ri-subtract-line"
                onClick={() => dispatch(decreaseQty(item.id))}
              ></i>
              {item.quantity}
              <i
                className="ri-add-line"
                onClick={() => dispatch(increaseQty(item.id))}
              ></i>
            </S.CartItemQuantity>
            <S.CartItemPrice>
              R$ {(item.price * item.quantity).toFixed(2)}
            </S.CartItemPrice>
          </S.SecondLine>
        </S.CartItem>
      ))}
    </>
  ) : (
    <S.EmptyCartMessage>
      <i className="ri-shopping-bag-line"></i>
      <p>Sua sacola está vazia</p>
    </S.EmptyCartMessage>
  )}
</S.CartItems>
      <S.CartPrice>
        <div>
          <S.CartPriceLabel>Subtotal</S.CartPriceLabel>
          <S.CartPriceValue>R$ {subtotal.toFixed(2)}</S.CartPriceValue>
        </div>
        <div>
          <S.CartPriceLabel>Taxa de Entrega</S.CartPriceLabel>
          <S.CartPriceValue>R$ {deliveryFee.toFixed(2)}</S.CartPriceValue>
        </div>
        <div>
          <S.CartPriceLabel className="total">Total</S.CartPriceLabel>
          <S.CartPriceValue className="total">R$ {total.toFixed(2)}</S.CartPriceValue>
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
        <Button onClick={() => FinishPurchase()}>Finalizar Compra</Button>
      </S.CartCheckout>
    </S.Cart>
  );
};

export default Cart;
