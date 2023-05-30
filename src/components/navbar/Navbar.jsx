import { Button, Container, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import cart from "../../assets/shop.png";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
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
              <Typography variant="h6">
                <img src={cart} alt="" width="20px" />
              </Typography>
            </li>
            <li>
              <Link to="/register">
                <Button variant="outlined" color="white">Sign Up</Button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <Button variant="contained" color="white">Sign In</Button>
              </Link>
            </li>
          </ul>
        </header>
      </Container>
    </nav>
  );
};

export default Navbar;
