import React from "react";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer>
      <ContactForm />
      <p>Frontem &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
