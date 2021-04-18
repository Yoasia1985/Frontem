import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import Stack from "../components/Stack";

const MainStyles = styled.main`
  grid-column: 1 / -1;
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  p {
    text-align: center;
  }
  .wrapper {
    padding: 2.5rem;
    width: min(70ch, calc(100% - 64px));
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
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

export const query = graphql`
  query MyQuery {
    github {
      viewer {
        avatarUrl(size: 1000)
      }
    }
  }
`;
const IndexPage = ({ data }) => {
  return (
    <>
      <MainStyles>
        <section className="hero">
          <div className="wrapper">
            <h1>
              Hi!
              <br />
              I&#39;m Miro.
              <span>front-end developer</span>
            </h1>
            <div className="pic">
              <img src={data.github.viewer.avatarUrl} alt="Me." />
            </div>
          </div>
        </section>
        <Stack />
      </MainStyles>
      <ContactForm />
    </>
  );
};

export default IndexPage;
