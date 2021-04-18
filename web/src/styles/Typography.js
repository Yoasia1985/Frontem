import { createGlobalStyle } from "styled-components";
import Merriweather from "../assets/fonts/merriweather-regular-webfont.woff2";
import Montserrat from "../assets/fonts/montserrat-bold-webfont.woff2";

const Typography = createGlobalStyle`
@font-face {
    font-family: 'Merriweather';
    src: url(${Merriweather});
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat});
    font-weight: normal;
    font-style: normal;
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
