import React from "react";
import PostPreview from "./PostPreview";
import styled from "styled-components";
const ListStyles = styled.div`
  min-height: 100vh;
`;
const PostsList = ({ data }) => {
  return (
    <ListStyles>
      {data.posts.nodes.map((post) => {
        return <PostPreview key={post.id} data={post} />;
      })}
    </ListStyles>
  );
};

export default PostsList;
