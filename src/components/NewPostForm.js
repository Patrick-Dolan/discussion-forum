import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewPostForm(props) {

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      title: event.target.title.value, 
      author: event.target.author.value,
      date: event.target.date.value,
      postBody: event.target.postBody.value,
      id: v4()});
  }

  return (
  <>
    <ReusableForm
      formSubmissionHandler={handleNewPostFormSubmission}
      buttonText="Post" />
    </>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};


export default NewPostForm;