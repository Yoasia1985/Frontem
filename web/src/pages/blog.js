import React from "react";
import { graphql } from "gatsby";
import PostsList from "../components/PostsList";
import styled from "styled-components";

const BlogPageStyles = styled.main`
  grid-column: 1 / -1;
`;
export const query = graphql`
  query MyQuery {
    allPosts: allSanityPost {
      nodes {
        id
        slug {
          current
        }
        mainImage {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
          caption
        }
        authors {
          author {
            name
            image {
              asset {
                fluid(maxWidth: 150) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
        title
        publishedAt(formatString: "DD-MM-YYYY")
        body {
          children {
            text
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
