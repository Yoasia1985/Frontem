import React from "react";
import styled from "styled-components";

const IndexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const IndexPage = () => {
  return (
    <>
      <IndexContainer>
        <h1>I am indexPage</h1>
      </IndexContainer>
    </>
  );
};

export default IndexPage;
