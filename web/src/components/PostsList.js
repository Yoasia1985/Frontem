import React from "react";
import PostPreview from "./PostPreview";

const PostsList = ({ data }) => {
  return (
    <>
      {data.allPosts.nodes.map((post) => (
        <PostPreview key={post.id} data={post} />
      ))}
    </>
  );
};

export default PostsList;
