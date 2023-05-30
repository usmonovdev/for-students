import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductsService from "../../api/products";
import {
  productIdStart,
  productIdSuccess,
} from "../../reduxes/productBiIdSlice";
import { Typography } from "@mui/material";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productById);
//   console.log(state);

  const getSingleProduct = async () => {
    dispatch(productIdStart());
    const response = await ProductsService.getProductById(id);
    try {
      dispatch(productIdSuccess(response.data));
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div>
      {/* {state.products?.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.title}</h1>
          </div>
        );
      })} */}
      <h1>{products.title}</h1>

    </div>
  );
};

export default Product;
