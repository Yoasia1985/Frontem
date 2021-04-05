import React from "react";
import styled from "styled-components";

const ContainerStyles = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(37rem, 100%);
  grid-template-rows: max-content 1fr max-content;
`;
export default function Container({ children }) {
  return <ContainerStyles>{children}</ContainerStyles>;
}
