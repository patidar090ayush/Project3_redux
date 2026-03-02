import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],   // ⭐⭐⭐ THIS WAS THE BUG
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {

    loadproducts: (state, action) => {
      state.products = action.payload;
    },

    addproduct: (state, action) => {
      state.products.push(action.payload);
    }

  },
});

export const { loadproducts, addproduct } = productSlice.actions;
export default productSlice.reducer;