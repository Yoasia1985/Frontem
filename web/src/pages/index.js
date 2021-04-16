import React from "react";
import styled from "styled-components";
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

const IndexPage = () => {
  return (
    <>
      <MainStyles>
        <h1>Mirek Ostafinski</h1>
        <p>
          I&apos;m a web developer passionate about building web applications.
        </p>
      </MainStyles>
      <ContactForm />
    </>
  );
};

export default IndexPage;
