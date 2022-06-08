import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

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
    <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          name='title'
          placeholder='Title' />
        <input
          type='text'
          name='author'
          placeholder='Author' />
        <input
          type='text'
          name='date'
          placeholder='Date' />
        <textarea
          name='postBody'
          placeholder='Post body...' />
        <button type='submit'>Create Post</button>
      </form>
    </>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};


export default NewPostForm;