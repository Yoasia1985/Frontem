import { createGlobalStyle } from "styled-components";
import bg from "../assets/bg.png";
import "normalize.css";

const GlobalStyles = createGlobalStyle`
      :root {
    --red: #FF4949;
    --syntax-del: #FF5555;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --violet: rgb(155, 109, 255);
    --violet-opacity: rgba(155, 109, 255, .2);
    --grey: #f6f9fb;
    --grey-secondary: #dde4e9;
    --grey-darker: #474f5b;
    --boxShadow: 0 6px 16px 0 rgb(0 0 0 / 14%);
    --syntax-comment: #6c8998;
    --syntax-prop: #FF39A8;
    --syntax-bool: #FFD600;
    --syntax-val: #61747D;
    --syntax-name: #C653FF;
    --syntax-regex: #ffd700;
    --syntax-fn: rgb(0, 190, 255);
  }
  * {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
  }
  body {
    font-size: 2rem;
    background: url(${bg});
  }
`;

export default GlobalStyles;
