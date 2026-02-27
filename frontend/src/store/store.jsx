import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import userSlice from "./reducers/userSlice";
import cartSlice from "./reducers/cartSlice";    

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    productsReducer: productSlice,
    cartsReducer: cartSlice,
  },
});
