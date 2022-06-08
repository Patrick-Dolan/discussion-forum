import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  return (
    <>
      {Object.values(props.postList).map((element) => 
        <Post
        title = {element.title}
        author = {element.author}
        postBody = {element.postBody}
        date = {element.date}
        id = {element.id}
        key = {element.id}/>
      )}
    </>
    );
}

PostList.propTypes = {
  postList: PropTypes.object,
  // onPostSelection: PropTypes.func
}

export default PostList;