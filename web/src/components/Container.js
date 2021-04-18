import React from "react";
import styled from "styled-components";

const ContainerStyles = styled.div`
  height: 100vh;
  margin: 0 auto;
  background: #efede7;
  display: grid;
  grid-template-columns: 1fr min(70ch, calc(100% - 64px)) 1fr;
  & > * {
    grid-column: 2;
    padding: 0.15rem 3rem;
  }
  header {
    grid-column: 1 / -1;
    height: 9rem;
    padding: 0;
    margin: 2rem 0;
  }
`;
export default function Container({ children }) {
  return <ContainerStyles>{children}</ContainerStyles>;
}
