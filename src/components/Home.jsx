import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productFailure,
  productStart,
  productSuccess,
} from "../reduxes/productsSlice";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ProductsService from "../api/products";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "../components/home.scss";
import { productIdAddSuccess } from "../reduxes/selectedProductSlice";
import Cart from "./cart/Cart";

const Home = () => {
  const key = "ADDED_ITEM";
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);
  const { productSelected } = useSelector((state) => state.selectedProduct);

  const handleSelectedProduct = (e) => {
    dispatch(productIdAddSuccess([...productSelected, e]));
  };

  // const getSelectedId = productSelected.map((e) => e.id);
  // console.log(getSelectedId.indexOf(), "selected");

  // const filterProduct = products.filter(
  //   (item) => getSelectedId.indexOf(item.id) !== -1
  // );
  // console.log(filterProduct, "filtered");

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(productSelected));
  }, [productSelected]);

  const getProducts = async () => {
    dispatch(productStart());
    try {
      const response = await ProductsService.getProducts();
      dispatch(productSuccess(response.data));
    } catch (error) {
      console.log(error, "error");
      dispatch(productFailure(error.message));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Cart />
      <Loading loading={isLoading} />
      <div className="grid-card">
        {!isLoading &&
          products?.map((product, index) => {
            return (
              <Card sx={{ maxWidth: 345 }} key={product.id}>
                <CardMedia
                  image={product.image}
                  component="img"
                  alt="green iguana"
                  height="140"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.title.slice(0, 15)}...
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description.slice(0, 90)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    aria-label="add"
                    size="small"
                    onClick={() => handleSelectedProduct(product)}
                  >
                    {/* {product.id !== getSelectedId ? ( */}
                    <AddShoppingCartIcon />
                    {/* // ) : (
                    //   <RemoveCircleOutlineIcon />
                    // )} */}
                  </IconButton>
                  <Link to={`/product/${product.id}`}>
                    <Button size="small" variant="outlined">
                      Learn More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default Home;
