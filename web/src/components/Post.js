import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const PostStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    grid-template-rows: max-content 1fr;
  }
  grid-template-rows: subgrid;
  grid-row: span 3;
  grid-gap: 1rem;
  h2 {
    margin: 0;
  }
`;

const Post = ({ data }) => {
  return (
    <PostStyles>
      <Link to={`/blog/${data.slug.current}`}>
        <h2>{data.title}</h2>
      </Link>
      <Img fluid={data.mainImage.asset.fluid} alt={data.title} />
    </PostStyles>
  );
};

export default Post;
