import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyles = createGlobalStyle`
      :root {
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --boxShadow: 0 6px 16px 0 rgb(0 0 0 / 14%);
    --color-form: #1BA098;
    --color-bg: rgb(5, 22, 34);
  }
  * {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
  }
  body {
    font-family: 'Merriweather', serif;
    font-size: 1.65rem;
    background: #EFEDE7;
    color: rgba(0, 0, 0, 0.9);

  }
  a, input {
    outline-color: var(--yellow);
  }
`;

export default GlobalStyles;
