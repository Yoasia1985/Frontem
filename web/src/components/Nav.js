import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyles = styled.nav`
  height: 9rem;
  ul {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
  li {
    margin-right: 3rem;
    transform: rotate(-3deg);
    transition: all 0.3s ease;
    border-bottom: 3px solid transparent;
    &:hover {
      transform: rotate(3deg);
      border-bottom: 3px solid var(--yellow);
    }
    a {
      font-family: "Indigo Regular";
      font-size: 2.5rem;
      text-decoration: none;
      text-transform: uppercase;
      color: var(--violet);
    }
  }
`;
export default function Nav() {
  return (
    <>
      <NavStyles>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
        </ul>
      </NavStyles>
    </>
  );
}
