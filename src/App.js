import { Container, ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import SignUp from "./components/signUp/SignUp";
import SignIn from "./components/signIn/SignIn";
import Footer from "./components/footer/Footer";
import "./App.css"
import Product from "./components/product/Product";
import AddProduct from "./components/addProduct/AddProduct";
const { palette } = createTheme();
const { augmentColor } = palette;

function App() {
  const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      mode: 'light',
      white: createColor('#f3e5f5'),
      primary: {
        main: '#9c27b0',
      },
      secondary: {
        main: '#FFAE5F',
      },
    },
    // shadows: ["none"],
    typography: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeightLight: 200,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container fixed>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp />}/>
          <Route path="/login" element={<SignIn />}/>
          <Route path="/add-product" element={<AddProduct />}/>
          <Route path="/product/:id" element={<Product />}/>
        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App