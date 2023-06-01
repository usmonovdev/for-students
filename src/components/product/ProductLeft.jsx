import React from "react";
import { useSelector } from "react-redux";

const ProductLeft = () => {
  const state = useSelector((state) => state.productById);
  return (
    <div className="product-left">
      <img src={state.products?.image} alt="" />
    </div>
  );
};

export default ProductLeft;
