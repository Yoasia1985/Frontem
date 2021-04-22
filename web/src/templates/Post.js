import React from "react";
import { graphql } from "gatsby";
import Container from "../components/Container";

export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
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
const BlogPostTemplate = ({ data: { post } }) => {
  return (
    <>
      <Container>
        <img src={post.mainImage.asset.fluid.src} alt="obraz" />
      </Container>
    </>
  );
};

export default BlogPostTemplate;
