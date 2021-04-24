import React from "react";
import { graphql } from "gatsby";
import PostsList from "../components/PostsList";
import styled from "styled-components";

const BlogPageStyles = styled.main`
  min-height: 100vh;
`;
export const query = graphql`
  {
    posts: allSanityPost {
      nodes {
        id
        title
        body {
          children {
            text
          }
        }
        slug {
          current
        }
        mainImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
export default function BlogPage({ data }) {
  return (
    <BlogPageStyles>
      <PostsList data={data}></PostsList>
    </BlogPageStyles>
  );
}
