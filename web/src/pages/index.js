import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";

const MainStyles = styled.main`
  height: 65rem;
  h1 {
    font-size: min(max(3.75rem, 3vw), 7rem);
    @supports (font-size: clamp(3.75rem, 3vw, 7rem)) {
      font-size: clamp(3.75rem, 3vw, 7rem);
    }
    font-family: "Indigo Regular";
    letter-spacing: 3px;
    color: var(--grey-darker);
  }
`;

export const query = graphql`
  query MyQuery {
    github {
      viewer {
        avatarUrl(size: 10)
      }
    }
  }
`;
const IndexPage = () => {
  return (
    <>
      <MainStyles>
        <Logo />
      </MainStyles>
      <ContactForm />
    </>
  );
};

export default IndexPage;
