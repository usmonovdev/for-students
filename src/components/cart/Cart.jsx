import styled from "@emotion/styled";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { drawerOpen } from "../../reduxes/selectedProductSlice";

const Cart = () => {
  const { productSelected, open } = useSelector((state) => state.selectedProduct);
  const dispatch = useDispatch()
  
  return (
    <div>
      <Drawer anchor="right" open={open}>
      <Button size="small" variant="outlined" onClick={() => dispatch(drawerOpen())}>
        close
      </Button>
        {productSelected.map((product) => {
          return (
            <Card sx={{ maxWidth: 400, maxHeight: 800 }} key={product.id}>
              <CardMedia
                image={product.image}
                component="img"
                alt="green iguana"
                width="300px"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.title.slice(0, 15)}...
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/product/${product.id}`}>
                  <Button size="small" variant="outlined">
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </Drawer>
    </div>
  );
};

export default Cart;
