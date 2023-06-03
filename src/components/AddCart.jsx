import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productIdAddSuccess } from "../reduxes/selectedProductSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { IconButton } from "@mui/material";

const AddCart = ({ product }) => {
  const key = "ADDED_ITEM";
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);
  const { productSelected } = useSelector((state) => state.selectedProduct);

  const handleSelectedProduct = (e) => {
    setAdd(!add);
    dispatch(productIdAddSuccess([...productSelected, e]));
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(productSelected));
  }, [productSelected]);

  return (
    <div>
      <IconButton aria-label="add" size="small">
        {product.id ? (
        <AddShoppingCartIcon onClick={() => handleSelectedProduct(product)} />
        ) : (
          <RemoveCircleOutlineIcon />
        )}
      </IconButton>
    </div>
  );
};

export default AddCart;
