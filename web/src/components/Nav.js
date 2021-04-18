import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyles = styled.nav`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: min(50ch, calc(100% - 64px));
    display: flex;
    justify-content: flex-end;
  }
  a {
    margin-right: 3rem;
    transform: rotate(-3deg);
    transition: all 0.3s ease;
    border-bottom: 3px solid transparent;
    font-size: 2.2rem;
    font-family: "Merriweather", serif;
    text-decoration: none;
    color: var(--color-form);
    &:hover {
      transform: rotate(3deg);
      border-bottom: 3px solid var(--yellow);
    }
    &:last-child {
      margin: 0;
    }
  }
`;
export default function Nav() {
  return (
    <>
      <NavStyles>
        <ul>
          <Link to="/">home</Link>
          <Link to="/blog/">blog</Link>
          <Link to="https://github.com/ostafinskim">github</Link>
        </ul>
      </NavStyles>
    </>
  );
}
