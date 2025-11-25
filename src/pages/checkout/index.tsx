import * as S from './styles'
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal, clearCart } from '../../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartTotal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const createOrder = async () => {
    if (cartItems.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/orders/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cliente: 1,
          itens: cartItems.map(item => ({
            menu_item: 3,
            quantidade: 2
          }))
        })
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Erro do backend:", data);
        alert("Erro ao criar pedido.");
        return;
      }

      console.log("Pedido criado com sucesso:", data);

      dispatch(clearCart());
      navigate(`/order/${data.id}`);

    } catch (error) {
      console.error("Erro inesperado:", error);
      alert("Erro ao finalizar pedido.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Checkout>
      <h1>Checkout</h1>

      <button onClick={createOrder} disabled={loading}>
        {loading ? "Enviando pedido..." : "Confirmar Pedido"}
      </button>
    </S.Checkout>
  );
}

export default Checkout;
