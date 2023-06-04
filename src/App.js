import { Container, ThemeProvider, createTheme } from "@mui/material";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
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
      <Navbar/>
      <Container fixed>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App