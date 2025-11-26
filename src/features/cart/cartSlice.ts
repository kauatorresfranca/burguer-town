import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// 📌 Interface ajustada para a ação addItem: 
// Recebe todos os dados do item, e 'quantity' é a quantidade inicial a adicionar.
interface AddItemPayload extends Omit<CartItem, "quantity"> {
  quantity: number; 
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Ação addItem ajustada para receber a quantidade do payload
    addItem: (state, action: PayloadAction<AddItemPayload>) => {
      const { id, quantity, ...rest } = action.payload;
      const existing = state.items.find(item => item.id === id);

      if (existing) {
        // Se existir, soma a nova quantidade (ex: +3)
        existing.quantity += quantity;
      } else {
        // Se for novo, adiciona com a quantidade inicial (ex: 3)
        state.items.push({ id, ...rest, quantity });
      }
    },
    
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    increaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
  
// Selectors (fora dos reducers)
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartTotal = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const { addItem, removeItem, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;