// import { configureStore } from "@reduxjs/toolkit";
// import productSlice from "./reducers/productSlice";
// import userSlice from "./reducers/userSlice";
// import cartSlice from "./reducers/cartSlice";    

// export const store = configureStore({
//   reducer: {
//     userReducer: userSlice,
//     productsReducer: productSlice,
//     cartsReducer: cartSlice,
//   },
// });







import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice";
import userReducer from "./reducers/userSlice";
import cartReducer from "./reducers/cartSlice";    

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
  },
});
