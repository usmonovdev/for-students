import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./addProduct.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  NewProductFailure,
  NewProductSuccess,
  newProductStart,
} from "../../reduxes/addProductSlice";
import axios from "../../api/index";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const {isLoading, new_product  } = useSelector((state) => state.new_product);
  console.log(new_product);

  const handleAddProduct = async () => {
    dispatch(newProductStart());
    try {
      const response = await axios.post("/products", {
        title, price, description: desc, image: "https://i.pravatar.cc", category,
      });
      dispatch(NewProductSuccess(response.data));
    } catch (error) {
      dispatch(NewProductFailure(error.message));
    }
  };

  return (
    <div className="input-product">
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        onChange={(e) => setDesc(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Category"
        variant="outlined"
        onChange={(e) => setCategory(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Price"
        variant="outlined"
        onChange={(e) => setPrice(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddProduct}>
        Add Product
      </Button>
    </div>
  );
};

export default AddProduct;
