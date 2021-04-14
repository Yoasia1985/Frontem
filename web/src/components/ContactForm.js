import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import styled from "styled-components";

const FormStyles = styled.form`
  .field {
    margin-bottom: 10px;
  }

  .field label {
    display: block;
    font-size: 12px;
    color: #777;
  }

  .field input {
    display: block;
    min-width: 250px;
    line-height: 1.5;
    font-size: 14px;
  }

  input[type="submit"] {
    display: block;
    padding: 6px 30px;
    font-size: 14px;
    background-color: #4460aa;
    color: #fff;
    border: none;
  }
`;

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "andre_gmail",
        "template_awci4ku",
        e.target,
        "user_DHjsoc4MGJTVAte9EI2Rq"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({ icon: "success", text: "Email Send!" });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <FormStyles onSubmit={sendEmail}>
      <p className="field">
        <label htmlFor="name">Your name:</label>
        <input id="name" name="name" type="text" />
      </p>
      <p className="field">
        <label htmlFor="email">Your Email:</label>
        <input id="email" name="email" type="email" />
      </p>
      <p className="field">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" type="text" />
      </p>
      <input type="submit" value="send!" />
    </FormStyles>
  );
}
