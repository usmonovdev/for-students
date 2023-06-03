import React, { useEffect } from "react";
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
import ProductsService from "../api/products";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "../components/home.scss";
import Cart from "./cart/Cart";
import AddCart from "./AddCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);

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
      <div className="add">
        <Link to={"/add-product"}>
          <AddCircleOutlineIcon color="white" />
        </Link>
      </div>
      <div className="grid-card">
        {!isLoading &&
          products?.map((product) => {
            return (
              <Card sx={{ maxWidth: 345 }} key={product.id}>
                <CardMedia
                  image={product.image}
                  component="img"
                  alt={product.title}
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
                  <AddCart product={product} />
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
