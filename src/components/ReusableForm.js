import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
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
          <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;