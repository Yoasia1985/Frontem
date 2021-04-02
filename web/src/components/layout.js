import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
