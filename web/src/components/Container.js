import React from "react";
import styled from "styled-components";

const ContainerStyles = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr minmax(29rem, 60ch) 1fr;
  & > * {
    grid-column: 2;
  }
  header {
    padding: 0;
    margin: 2.5rem 0 1.5rem 0;
  }
`;
export default function Container({ children }) {
  return <ContainerStyles>{children}</ContainerStyles>;
}
