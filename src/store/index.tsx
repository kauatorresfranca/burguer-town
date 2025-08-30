import { configureStore } from "@reduxjs/toolkit";
// importar reducers
import userReducer from "../features/user/userSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

// Tipos do Redux (para TS)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
