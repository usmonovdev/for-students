import { Rating, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ProductRight = () => {
  const state = useSelector((state) => state.productById);
  return (
    <div className="product-right">
      <Typography variant="h6">{state.products?.title}</Typography>
      <Typography variant="subtitle1">{state.products?.description}</Typography>
      <Typography variant="h6">Price: ${state.products?.price}</Typography>
      <Rating name="rating" value={state.products?.rating?.rate} readOnly />
    </div>
  );
};

export default ProductRight;
