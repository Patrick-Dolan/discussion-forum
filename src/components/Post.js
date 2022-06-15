import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <>
    <div onClick = {() => props.whenPostClicked(props.id)}>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <p>{props.postBody}</p>
      <p>{props.date}</p>
      <hr />
    </div>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  postBody: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
};

export default Post;