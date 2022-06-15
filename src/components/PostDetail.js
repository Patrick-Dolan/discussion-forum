import React from "react";
import PropTypes from "prop-types";

function PostDetail(props) {
  const { post, onClickingDelete } = props;
  
  return (
    <>
      <h3>{post.title}</h3>
      <p>Author: <em>{post.author}</em></p>
      <p>{post.postBody}</p>
      <p>{post.date}</p>
      <button onClick={() => onClickingDelete(post.id)}>Delete Post</button>
    </>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default PostDetail;