import React from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asynccreateproduct } from "../../store/actions/productActions";

const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  async function CreateProductHandler(product) {
        product.price = Number(product.price);

        await dispatch(asynccreateproduct(product));
        navigation("/products");
        reset();
    }
  return (
    <form
          onSubmit={handleSubmit(CreateProductHandler)}
          className="flex flex-col gap-4 w-75 mx-auto mt-10"
      >


          <input
              {...register("image")}
              className="border border-gray-300 rounded-md p-2"
              type="url"
              placeholder="Product Image URL" />



          <input
              {...register("title")}
              className="border border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Product Title" />
          <input
              {...register("price")}
              className="border border-gray-300 rounded-md p-2"
              type="number"
              placeholder="price" />
          <textarea
              {...register("description")}
              className="border border-gray-300 rounded-md p-2"
              placeholder="Product Description"
          ></textarea>

           <select
              {...register("category")}
              className="border border-gray-300 bg-gray-800 rounded-md p-2" 
            >
                <option value="">Select Category</option>   
                <option value="Mobile">Mobile</option>
                <option value="Laptop">Laptop</option>
                <option value="Tablet">Tablet</option>
                <option value="Accessories">Accessories</option>
            </select>

          <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
              type="submit"
          >
             Create Product
          </button>
    </form>
  );
};

export default CreateProduct;
