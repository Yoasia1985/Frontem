import React from "react";
import PostsList from "../components/PostsList";
import styled from "styled-components";

const BlogPageStyles = styled.main`
  grid-column: 1 / -1;
`;

export default function BlogPage() {
  return (
    <BlogPageStyles>
      <PostsList></PostsList>
    </BlogPageStyles>
  );
}
