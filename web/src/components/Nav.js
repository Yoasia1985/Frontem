import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyles = styled.nav`
  width: 100%;
  ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
  }
  li {
    margin-right: 3rem;
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
