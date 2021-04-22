import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import Stack from "../components/Stack";

const MainStyles = styled.main`
  width: 100%;
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  justify-items: center;
  .hero {
    padding: 2.5rem 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2.5rem;
    grid-template-rows: repeat(2, max-content);
    h1 {
      grid-column: 1 / -1;
      grid-row: 2 / 3;
      justify-self: center;
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
        text-align: center;
      }
    }
    @media (max-width: 485px) {
      flex-direction: column-reverse;
      h1 {
        text-align: center;
      }
    }
  }

  .pic {
    width: 100%;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    justify-self: center;
    width: 300px;
    height: 300px;
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
  .bounce-in-top {
    -webkit-animation: bounce-in-top 1.2s 0.3s both;
    animation: bounce-in-top 1.2s 0.3s both;
  }
  @-webkit-keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
      transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
      transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
`;

const IndexPage = () => {
  const [pic, setPic] = useState();
  useEffect(() => {
    fetch(`https://api.github.com/users/ostafinskim`)
      .then((r) => r.json())
      .then((data) => setPic(data.avatar_url))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <MainStyles>
        <section className="hero">
          <div className="pic bounce-in-top">
            {pic ? <img src={pic} alt="Me" /> : ""}
          </div>
          <h1>
            Hi! I&#39;m Miro.
            <span>front-end developer</span>
          </h1>
        </section>
        <Stack />
      </MainStyles>
      <ContactForm />
    </>
  );
};

export default IndexPage;
