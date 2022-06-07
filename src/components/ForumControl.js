import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ForumControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      formVisibleOnPage: false,
      mainPostList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage 
    }));
  }
  
  render() {
    let currentlyVisibleState = null;
    let buttonText

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm/>;
      buttonText = "Back";
    } else {
      currentlyVisibleState = <PostList postList={this.state.mainPostList} />
      buttonText = "Create Post"
    }

    return (
      <>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

export default ForumControl;