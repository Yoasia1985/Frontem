import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
      :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }
  html {
    font-size: 10px;
  }
  body {
    font-size: 2rem;
  }
`;

export default GlobalStyles;
