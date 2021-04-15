import React from "react";
import { useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data, e);
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
  };
  return (
    <FormStyles onSubmit={handleSubmit(onSubmit)}>
      <p className="field">
        <label htmlFor="name">Your name:</label>
        <input
          id="name"
          name="multipleErrorInput"
          type="text"
          {...register("name", {
            required: "This field is required",
            minLength: 3,
          })}
        />
        {errors.name && (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        )}
      </p>
      <p className="field">
        <label htmlFor="email">Your Email:</label>
        <input
          id="email"
          name="multipleErrorInput"
          type="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter valid email address",
            },
          })}
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
      </p>
      <p className="field">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          type="text"
          {...register("message")}
        />
      </p>
      <input type="submit" value="send!" />
    </FormStyles>
  );
}
