import React from "react";
import styled from "styled-components";

const MainStyles = styled.main`
  h1 {
    font-size: min(max(3.75rem, 3vw), 7rem);
    @supports (font-size: clamp(3.75rem, 3vw, 7rem)) {
      font-size: clamp(3.75rem, 3vw, 7rem);
    }
    font-family: "Indigo Regular";
    letter-spacing: 3px;
    color: var(--black);
  }
`;

const IndexPage = () => {
  return (
    <MainStyles>
      <h1>Mirek Ostafinski</h1>
      <p>front-end developer</p>
    </MainStyles>
  );
};

export default IndexPage;
