import React, { useEffect } from "react";
import ProductsService from "../api/products";
import { useDispatch, useSelector } from "react-redux";
import {
  productFailure,
  productStart,
  productSuccess,
} from "../reduxes/productsSlice";
import { Card, CardBody, CardImage } from "../styles/card";
import { DisplayGrid } from "../styles/displaygrid";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);
  console.log(state);
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
    <div>
      {state.isLoading ? <h1>Loading...</h1> : ""}
      <DisplayGrid gap={"10px"}>
        {state.products.map((data) => {
          return (
            <Card key={data.id}>
              <CardImage src={data.image} />
              <CardBody>
                <h4>{data.title}</h4>
              </CardBody>
            </Card>
          );
        })}
      </DisplayGrid>
    </div>
  );
};

export default Home;
