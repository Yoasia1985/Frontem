import React from "react";
import styled from "styled-components";

const ContainerStyles = styled.div`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min(60ch, calc(100% - 64px)) 1fr;
  grid-template-rows: max-content 1fr max-content;
  grid-column-gap: 32px;
  & > * {
    grid-column: 2;
    background: var(--white);
    box-shadow: var(--boxShadow);
    padding: 2rem 3rem;
  }
`;
export default function Container({ children }) {
  return <ContainerStyles>{children}</ContainerStyles>;
}
