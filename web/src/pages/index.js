import React from "react";
import styled from "styled-components";
const IndexContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: clamp(3.5rem, 10vw, 7rem);
    font-family: "Indigo Regular";
    letter-spacing: 3px;
    color: var(--black);
  }
`;

const IndexPage = () => {
  return (
    <>
      <IndexContainer>
        <h1>Mirek Ostafinski</h1>
        <p>front-end developer</p>
      </IndexContainer>
    </>
  );
};

export default IndexPage;
