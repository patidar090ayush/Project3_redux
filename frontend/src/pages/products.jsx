import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncloadproducts } from "../store/actions/productActions";

const Products = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadproducts());
  }, []);

  return (
    <div>
      products page
    </div>
  );
};

export default Products;