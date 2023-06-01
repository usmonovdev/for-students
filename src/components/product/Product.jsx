import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductsService from "../../api/products";
import {
  productIdStart,
  productIdSuccess,
} from "../../reduxes/productBiIdSlice";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";
import Loading from "../Loading";
import "./procut.scss";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.productById);

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
    <>
      <Loading loading={state.isLoading} />
      {!state.isLoading && (
        <div className="product">
          <ProductLeft />
          <ProductRight />
        </div>
      )}
    </>
  );
};

export default Product;
