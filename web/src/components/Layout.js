import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Container from "./Container";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Container>
        <header>
          <Nav />
        </header>
        {children}
        <Footer />
      </Container>
    </>
  );
}
