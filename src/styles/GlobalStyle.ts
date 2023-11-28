import { createGlobalStyle } from "styled-components";

import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }
  
`
export const colors = {
  primary: "#EB0E0E",
  secondary: "#FFC107",
  secondaryLight: "#EB7070",
  third: "#1B1A1A",
  thirdLight: "#d9d9d9",
  black: "#000",
  white: "#fff"
}
