import React from "react";
import styled from "styled-components";

const LogoStyles = styled.h1`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-0.7em);
  margin-top: 15rem;
  .letter {
    font-size: 8.8rem;
    margin: 0 0.8rem;
    --scale: 1;
    --rotate: -10deg;
    --translateX: 0;
    --translateY: 0;
    --rotateX: 0deg;
    transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX));
    &.I {
      --rotate: -10deg;
      --scale: 1.2;
      --translateX: 0.3em;
    }
    &.est {
      --rotate: 12deg;
      --scale: 1.1;
      --translateY: -0.14em;
    }
    &.am {
      --rotate: 2deg;
      --scale: 0.9;
      --translateY: -0.1em;
      --translateX: -0.35em;
    }
    &.M {
      --translateX: -0.05;
      --scale: 2.5;
    }
    &.i {
      --rotate: 2deg;
      --scale: 1.1;
      --translateX: 0.05em;
      --translateY: -0.05em;
    }
    &.r {
      --scale: 0.9;
      --translateY: -0.1em;
      --translateX: 0.1em;
    }
    &.o {
      --rotate: 3deg;
      --scale: 0.9;
    }
    &.t {
      --rotate: -12deg;
      --scale: 1.2;
      --translateX: 0.06em;
    }
    &.e {
      --rotate: 12deg;
      --scale: 0.9;
      --translateY: -0.14em;
    }
    &.m {
      text-transform: uppercase;
      --rotate: 12deg;
      --scale: 1.1;
      --translateY: -0.14em;
    }
  }
  .bottom {
    font-size: 2rem;
  }
`;

export default function Logo() {
  return (
    <>
      <LogoStyles>
        <span className="letter I">I</span>
        <span className="letter est">&#39;</span>
        <span className="letter am">am</span>
        <span className="letter M">M</span>
        <span className="letter i">i</span>
        <span className="letter r">r</span>
        <span className="letter o">o</span>
        <span className="letter bottom">a web developer.</span>
      </LogoStyles>
    </>
  );
}
