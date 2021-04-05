import { createGlobalStyle } from "styled-components";

import indigR from "../assets/fonts/indigo_regular.woff2";
import indigO from "../assets/fonts/indigo_outline.woff2";

const Typography = createGlobalStyle`
@font-face {
    font-family: 'Indigo Outline';
    src: url(${indigO});
    font-weight: normal;
    font-style: normal;

}
@font-face {
    font-family: 'Indigo Regular';
    src: url(${indigR});
    font-weight: normal;
    font-style: normal;
}
  html {
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
`;

export default Typography;
