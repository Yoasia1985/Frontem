import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const PostPreview = ({ data }) => {
  return (
    <>
      <Link to={`/blog/${data.slug.current}`}>
        <h2>{data.title}</h2>
      </Link>
      <Img fluid={data.mainImage.asset.fluid} alt={data.title} />
    </>
  );
};

export default PostPreview;
