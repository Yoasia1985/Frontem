import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import styled from "styled-components";

const FormStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
  .field {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    &:nth-child(1) {
      grid-column: 1/2;
      margin-right: 10px;
      @media (max-width: 640px) {
        margin-right: 0;
      }
    }
    &:nth-child(2) {
      grid-column: 2/3;
      @media (max-width: 640px) {
        grid-column: 1/-1;
      }
    }
    &:nth-child(3) {
      grid-column: 1 / -1;
      min-height: 450px;
      textarea {
        resize: none;
        height: 100%;
        padding: 14px 10px;
        color: var(--black);
      }
    }
  }
  .field label {
    display: block;
    font-size: 14px;
  }

  .field input {
    display: block;
    min-width: 250px;
    line-height: 1.5;
    font-size: 14px;
    padding: 14px 10px;
    color: var(--black);
  }
  input[type="submit"] {
    grid-column: 1 / 2;
    justify-self: left;
    display: block;
    border-radius: 5px;
    padding: 16px 28px;
    font-size: 18px;
    background-color: var(--yellow);
    color: var(--black);
    box-shadow: var(--boxShadow);
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
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
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
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
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
