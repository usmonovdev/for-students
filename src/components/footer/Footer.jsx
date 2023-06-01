import React from "react";
import { Container, Typography } from "@mui/material";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="element">
          <Typography variant="subtitle1">All rights reserved!</Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
