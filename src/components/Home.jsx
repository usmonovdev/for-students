import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productFailure, productStart, productSuccess } from "../reduxes/productsSlice";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import ProductsService from "../api/products";
import "../components/home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);

  const getProducts = async () => {
    dispatch(productStart());
    const response = await ProductsService.getProducts();
    try {
      dispatch(productSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(productFailure(error.message));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid-card">
      {state.products?.map((product) => {
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
              <Button size="small" variant="contained">Share</Button>
              <Link to={`/product/${product.id}`}>
                <Button size="small" variant="outlined">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
