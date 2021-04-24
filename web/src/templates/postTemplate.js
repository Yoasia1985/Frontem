import { graphql } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const PostTemplateStyles = styled.div`
  min-height: 100vh;
  height: 100%;
  padding: 0 4rem;
`;
export default function postTemplate({ data }) {
  return (
    <PostTemplateStyles>
      <h1>{data.sanityPost.title}</h1>
      <Img
        fluid={data.sanityPost.mainImage.asset.fluid}
        alt={data.sanityPost.title}
      />
      {data.sanityPost.body.map((text, id) => {
        return <p key={id}>{text.children[0].text}</p>;
      })}
    </PostTemplateStyles>
  );
}

export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      id
      title
      body {
        children {
          text
        }
      }
      mainImage {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
