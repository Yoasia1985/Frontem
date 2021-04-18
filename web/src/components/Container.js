import React from "react";
import styled from "styled-components";

const ContainerStyles = styled.div`
  height: 100vh;
  margin: 0 auto;
  background: #efede7;
  display: grid;
  grid-template-columns: 1fr minmax(29rem, 60ch) 1fr;
  & > * {
    grid-column: 2;
  }
  header {
    height: 9rem;
    padding: 0;
    margin: 2rem 0;
  }
`;
export default function Container({ children }) {
  return <ContainerStyles>{children}</ContainerStyles>;
}
