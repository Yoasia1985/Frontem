import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import styled from "styled-components";

const FormStyles = styled.section`
  background: rgb(27, 160, 152);
  border-radius: 0.6rem;
  padding: 2.4rem;
  margin-bottom: 4.8rem;
  box-shadow: var(--boxShadow);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content 1fr;
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    .inner {
      grid-column: 1/-1;
      grid-row: 1/2;
    }
    .form {
      grid-column: 1/-1;
      grid-row: 2 / 3;
      grid-template-columns: 1fr;
      .input-wrapper {
        grid-column: 1/-1;
        grid-row: 1/2;
      }
      .msg {
        grid-column: 1/-1;
        grid-row: 2/3;
      }
    }
  }
  .inner {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-family: "Merriweather", serif;
      font-weight: bolder;
      letter-spacing: 3px;
      color: var(--color-bg);
      font-size: min(max(2.75rem, 3vw), 3.2rem);
      @supports (font-size: clamp(1.75rem, 3vw, 3.2rem)) {
        font-size: clamp(2.75rem, 3vw, 3.2rem);
      }
    }
    p {
      margin: 0;
      padding: 0;
    }
  }
  .form {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-auto-rows: min-content;
    grid-column-gap: 2rem;
    input[type="submit"] {
      grid-column: 1 / -1;
      justify-self: center;
      border: none;
      border-radius: 0.8rem;
      background: rgb(5, 22, 34);
      padding: 1.2rem 9rem;
      font-size: 2rem;
      text-transform: uppercase;
      color: white;
      cursor: pointer;
      box-shadow: var(--boxShadow);
      &:hover {
        transform: scale(1.025);
      }
    }
  }
  .field {
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 1rem;
    }
    input {
      width: 100%;
      padding: 1.2rem 1rem;
      border: none;
      border-radius: 8px;
      &:focus {
        outline-color: var(--yellow);
      }
    }
    textarea {
      resize: none;
      min-height: 16rem;
      padding: 1.2rem 1rem;
      border: none;
      border-radius: 8px;
      &:focus {
        outline-color: var(--yellow);
      }
    }
  }
  .input-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 861px) {
      align-items: center;
      justify-content: space-between;
    }
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
      <div className="inner">
        <h3>Contact me</h3>
      </div>
      <form className="form">
        <div className="input-wrapper">
          <p className="field">
            <label htmlFor="name">Name:</label>
            {errors.name && (
              <span
                style={{
                  color: "#a01b23",
                  marginBottom: "0.5rem",
                }}
              >
                {errors.name.message}
              </span>
            )}
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              {...register("name", {
                required: "This field is required",
                minLength: 3,
              })}
            />
          </p>
          <p className="field">
            <label htmlFor="email">Email:</label>
            {errors.email && (
              <span
                style={{
                  color: "#a01b23",
                  marginBottom: "0.5rem",
                }}
              >
                {errors.email.message}
              </span>
            )}
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter valid email address",
                },
              })}
            />
          </p>
        </div>
        <div className="msg">
          <p className="field">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              type="text"
              placeholder="Your message"
              {...register("message")}
            />
          </p>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </FormStyles>
  );
}
