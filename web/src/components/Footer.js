import React from "react";
import styled from "styled-components";
import git from "../assets/icons/github.svg";
import insta from "../assets/icons/instagram.svg";

const FooterStyles = styled.footer`
  grid-column: 1 / -1;
  padding: 3.5rem 0;
  height: 100%;
  background: rgb(5, 22, 34);

  p {
    color: white;
    text-align: center;
    &::selection {
      background: var(--yellow);
    }
  }
  .social {
    margin: 0 auto;
    width: min(70ch, calc(100% - 64px));
    display: flex;
    justify-content: center;
    a {
      margin-right: 3rem;
      &:last-child {
        margin: 0;
      }
    }
    img {
      width: 4rem;
      &::selection {
        background: var(--yellow);
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="social">
        <a href="https://github.com/ostafinskim">
          <img src={git} alt="Github icon" />
        </a>
        <a href="https://www.instagram.com/szalonyszaleniec/">
          <img src={insta} alt="Instagram icon" />
        </a>
      </div>
      <p>Frontem &copy; {new Date().getFullYear()}</p>
    </FooterStyles>
  );
}
