import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyles = createGlobalStyle`
      :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #f6f9fb;
    --grey-secondary: #dde4e9;
    --grey-darker: #474f5b;
    --boxShadow: 0 3px 8px 0 rgb(0 0 0 / 3%);
  }
  html {
    box-sizing: border-box;
  }
  body {
    font-size: 2rem;
    background: var(--grey);
  }
`;

export default GlobalStyles;
