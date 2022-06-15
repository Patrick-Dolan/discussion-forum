import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPostForm(props) {
  
  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({
      title: event.target.title.value,
      author: event.target.author.value,
      date: event.target.date.value,
      postBody: event.target.postBody.value,
      id: props.post.id
    })
  }
  
  return (
    <>
      <ReusableForm buttonText="Update Post" formSubmissionHandler={handleEditPostFormSubmission}/>
    </>
  );
}

EditPostForm.propTypes = {
  post: PropTypes.object,
  onEditPost: PropTypes.func
}

export default EditPostForm;