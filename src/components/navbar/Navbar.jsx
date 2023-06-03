import { Badge, Button, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { drawerOpen } from "../../reduxes/selectedProductSlice";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./navbar.scss";

const Navbar = () => {
  const { productSelected } = useSelector((state) => state.selectedProduct);
  console.log(productSelected.length);
  const dispatch = useDispatch();
  return (
    <nav>
      <Container>
        <header>
          <ul className="logo">
            <li>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </li>
            <li>
              <Typography variant="h6" sx={{ fontWeight: "800" }}>
                Shopping
              </Typography>
            </li>
          </ul>
          <ul className="links">
            <li>
              <IconButton aria-label="cart" onClick={() => dispatch(drawerOpen())}>
                <Badge badgeContent={productSelected.length} color="secondary">
                  <ShoppingCartIcon color="white" />
                </Badge>
              </IconButton>
            </li>
            <li>
              <Link to="/register">
                <Button variant="outlined" color="white">
                  Sign Up
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <Button variant="contained" color="white">
                  Sign In
                </Button>
              </Link>
            </li>
          </ul>
        </header>
      </Container>
    </nav>
  );
};

export default Navbar;
