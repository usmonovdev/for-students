import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { drawerOpen } from "../../reduxes/selectedProductSlice";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import "./cart.scss";

const Cart = () => {
  const { productSelected, open } = useSelector(
    (state) => state.selectedProduct
  );
  const dispatch = useDispatch();

  return (
    <div>
      <Drawer anchor="right" open={open}>
        <div className="drawer-box">
          <IconButton
            aria-label="delete"
            onClick={() => dispatch(drawerOpen())}
            sx={{ width: "40px" }}
          >
            <CloseIcon />
          </IconButton>
          {productSelected.map((product) => {
            return (
              <Box sx={{ boxShadow: 2 }} key={product.id} className="card">
                <img src={product.image} alt="product image" />
                <div className="card-body">
                  <Typography variant="subtitle1">{product.title}</Typography>
                  <Typography variant="subtitle2">
                    Price: ${product.price}
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </div>
              </Box>
            );
          })}
          <Button variant="contained" sx={{ width: "100%" }}>
            Check Out
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default Cart;
