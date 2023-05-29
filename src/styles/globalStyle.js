import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: ${props => props.theme.body};
        font-family: 'Raleway', sans-serif;
        font-size: 1.1rem;
        overflow-x: hidden;
    };
`

export const lightTheme = {
    body: '#fff6f1',
    orange: '#9c7123',
    blue: "#003555",
    white: "#f5efe3",
    black: "#160f01",
    blkTransparent: "#2b1d05bf",
};