import axios from "../../api/axiosconfig";
import { loadproducts } from "../reducers/productSlice";

export const asyncloadproducts = () => async (dispatch,getstate) => {
    try {
        const {data} = await axios.get("/products");
        dispatch(loadproducts(data));
    } catch (error) {
        console.error("Error loading products:", error);
    }
};

export const asynccreateproduct = (product) => async (dispatch) => {
  try {
    await axios.post("/products", product);

    // ⭐ dubara fetch
    dispatch(asyncloadproducts());

  } catch (error) {
    console.error("Create product error:", error);
  }
};