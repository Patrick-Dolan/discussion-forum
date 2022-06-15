import React from "react";
import PropTypes from "prop-types";

function PostDetail(props) {
  const { post } = props;
  
  return (
    <>
      <h3>{post.title}</h3>
      <p>Author: <em>{post.author}</em></p>
      <p>{post.postBody}</p>
      <p>{post.date}</p>
    </>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object
}

export default PostDetail;