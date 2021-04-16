import React from "react";
import styled from "styled-components";

const ContainerStyles = styled.div`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min(90ch, calc(100% - 64px)) 1fr;
  grid-auto-rows: auto;
  grid-gap: 32px;
  & > * {
    grid-column: 2;
    box-shadow: var(--boxShadow);
    background: rgb(239, 237, 243);
    padding: 2rem 3rem;
  }
  & :first-child {
    grid-column: 1 / -1;
    padding: 0;
    margin: 0;
  }
  & :last-child {
    grid-column: 1 / -1;
  }
`;
export default function Container({ children }) {
  return <ContainerStyles>{children}</ContainerStyles>;
}
