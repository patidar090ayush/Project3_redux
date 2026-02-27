import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  carts: [],
//   totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadcart: (state, action) => {
      state.carts = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { loadcart } = cartSlice.actions;
