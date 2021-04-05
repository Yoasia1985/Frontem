import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyles = createGlobalStyle`
      :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }
  body {
    font-size: 2rem;
    background: var(--black);
    color: var(--grey);
  }
`;

export default GlobalStyles;
