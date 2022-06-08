import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  const { postList } = props;
  return (
    <>
      {postList.map((element, index) => 
        <Post
        title = {element.title}
        author = {element.author}
        postBody = {element.postBody}
        date = {element.date}
        id = {element.id}
        key = {index}/>
      )}
    </>
    );
}

PostList.propTypes = {
  postList: PropTypes.array,
  // onPostSelection: PropTypes.func
}

export default PostList;