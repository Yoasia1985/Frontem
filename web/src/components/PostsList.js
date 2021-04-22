import React from "react";
import Post from "./Post";
import styled from "styled-components";

const PostListStyles = styled.div`
  margin: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 4rem;
  grid-auto-rows: max-content 500px;
`;

const PostsList = ({ data }) => {
  return (
    <PostListStyles>
      {data.allPosts.nodes.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </PostListStyles>
  );
};

export default PostsList;
