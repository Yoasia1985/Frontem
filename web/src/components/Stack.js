import React from "react";
import styled from "styled-components";
import css from "../assets/icons/css3-alt.svg";
import git from "../assets/icons/git.svg";
import html from "../assets/icons/html5.svg";
import js from "../assets/icons/js.svg";
import node from "../assets/icons/node.svg";
import npm from "../assets/icons/npm.svg";
import react from "../assets/icons/react.svg";
import sass from "../assets/icons/sass.svg";
import webpack from "../assets/icons/webpack.svg";
import gatsby from "../assets/icons/gatsby.svg";
import graphql from "../assets/icons/graphql.svg";
import next from "../assets/icons/next.svg";
import typescript from "../assets/icons/typescript.svg";

const StackStyled = styled.div`
  margin: 0 auto;
  width: 100%;
  .stack {
    margin: 5rem 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: max-content 1fr;
    grid-row-gap: 2.5rem;
    justify-items: center;
    align-items: center;
    &--2r {
      grid-template-columns: repeat(2, auto);
    }
    .todo-h {
      &:after {
        transform: rotate(2deg);
      }
    }
    h2 {
      font-size: min(max(2.3rem, 3vw), 3.4rem);
      @supports (font-size: clamp(2.3rem, 3vw, 3.4rem)) {
        font-size: clamp(2.3rem, 3vw, 3.4rem);
      }
      color: var(--color-bg);
      font-size: 3.2rem;
      grid-row: 1 / 2;
      grid-column: 1 / -1;
      position: relative;
      z-index: 1;
      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 73.32%;
        left: -5%;
        height: 4px;
        width: 110%;
        background: var(--yellow);
        border-radius: 6px;
        transform: skewX(-10deg) rotate(-2deg);
        z-index: -1;
      }
    }
    a {
      width: 9rem;
      height: 9rem;
    }
    img {
      width: 100%;
      height: 100%;
      border-bottom: 3px solid transparent;
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.1);
        border-color: var(--yellow);
      }
    }
  }
`;

const Stack = () => {
  return (
    <StackStyled>
      <section className="stack">
        <h2>Current stack:</h2>
        <a href="https://git-scm.com/">
          <img src={git} alt="Git icon" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
          <img src={html} alt="Html icon" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <img src={css} alt="Css icon" />
        </a>
        <a href="https://sass-lang.com/">
          <img src={sass} alt="Sass icon" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <img src={js} alt="JavaScript icon" />
        </a>
        <a href="https://reactjs.org/">
          <img src={react} alt="ReactJS icon" />
        </a>
        <a href="https://nodejs.org/en/">
          <img src={node} alt="Node.js icon" />
        </a>
        <a href="https://www.npmjs.com/">
          <img src={npm} alt="Npm icon" />
        </a>
        <a href="https://webpack.js.org/">
          <img src={webpack} alt="Webpack icon" />
        </a>
      </section>
      <section className="stack stack--2r">
        <h2 className="todo-h">Focused on next:</h2>
        <a href="https://www.typescriptlang.org/">
          <img src={typescript} alt="Typescript icon" />
        </a>
        <a href="https://nextjs.org/">
          <img src={next} alt="NextJS icon" />
        </a>
        <a href="https://graphql.org/">
          <img src={graphql} alt="GraphQL icon" />
        </a>
        <a href="https://www.gatsbyjs.com/">
          <img src={gatsby} alt="GatsbyJS icon" />
        </a>
      </section>
    </StackStyled>
  );
};

export default Stack;
