import React from "react";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";
const IndexContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: min(max(3.75rem, 3vw), 7rem);
    @supports (font-size: clamp(3.75rem, 3vw, 7rem)) {
      font-size: clamp(3.75rem, 3vw, 7rem);
    }
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
        <ContactForm />
      </IndexContainer>
    </>
  );
};

export default IndexPage;
