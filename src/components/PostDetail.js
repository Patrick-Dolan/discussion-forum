import React from "react";
import PropTypes from "prop-types";

function PostDetail(props) {
  const { post, onClickingDelete, onClickingEdit } = props;
  
  return (
    <>
      <h3>{post.title}</h3>
      <p>Author: <em>{post.author}</em></p>
      <p>{post.postBody}</p>
      <p>{post.date}</p>
      <button onClick={onClickingEdit}>Edit Post</button>
      <button onClick={() => onClickingDelete(post.id)}>Delete Post</button>
    </>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default PostDetail;