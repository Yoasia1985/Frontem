import React from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import Stack from "../components/Stack";

const MainStyles = styled.main`
  width: 100%;
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  .hero {
    display: flex;
    justify-content: space-around;
    @media (max-width: 485px) {
      flex-direction: column-reverse;
      h1 {
        text-align: center;
      }
    }
  }
  p {
    text-align: center;
  }
  h1 {
    font-size: min(max(3.75rem, 3vw), 9rem);
    @supports (font-size: clamp(3.75rem, 3vw, 9rem)) {
      font-size: clamp(3.75rem, 3vw, 9rem);
    }
    font-family: "Merriweather", serif;
    letter-spacing: 3px;
    color: var(--color-bg);
    span {
      color: var(--black);
      font-size: 1.6rem;
      display: block;
      font-family: monospace;
    }
  }
  .pic {
    align-self: center;
    width: 200px;
    height: 200px;
    border: double 6px transparent;
    box-shadow: var(--boxShadow);
    border-radius: 50%;
    background-image: radial-gradient(
      circle at bottom right,
      var(--color-form),
      var(--color-form)
    );
    background-origin: border-box;
    img {
      height: 100%;
      border-radius: 50%;
    }
  }
`;

const IndexPage = () => {
  return (
    <>
      <MainStyles>
        <section className="hero">
          <h1>
            Hi!
            <br />
            I&#39;m Miro.
            <span>front-end developer</span>
          </h1>
          <div className="pic"></div>
        </section>
        <Stack />
      </MainStyles>
      <ContactForm />
    </>
  );
};

export default IndexPage;
