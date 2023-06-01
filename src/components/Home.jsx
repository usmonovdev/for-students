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
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductsService from "../api/products";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "../components/home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);
  console.log(state);

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
      <Loading loading={state.isLoading}/>
      <div className="grid-card">
        {!state.isLoading && state.products?.map((product) => {
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
                <IconButton aria-label="delete" size="small">
                <AddShoppingCartIcon />
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
