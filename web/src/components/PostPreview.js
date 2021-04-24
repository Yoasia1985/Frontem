import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const PreviewStyles = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.6rem;
  h2 {
    margin-bottom: 1rem;
  }
  a {
    background: #eef2ff;
    padding: 1.5rem 1.5rem 1.5rem 3rem;
    margin-bottom: 2rem;
    border-radius: 3px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: var(--color-form);
    box-shadow: var(--boxShadow);
  }
  .img {
    width: 30rem;
    height: 22rem;
    border-radius: 6px;
    img {
      border-radius: 6px;
      width: 100%;
      height: 100%;
    }
  }
`;
const PostPreview = ({ data }) => {
  return (
    <PreviewStyles>
      <Link to={`/blog/${data.slug.current}`}>
        <h2>{data.title}</h2>
        <div className="img">
          <img src={data.mainImage.asset.fluid.src} alt={data.title} />
        </div>
      </Link>
    </PreviewStyles>
  );
};

export default PostPreview;
