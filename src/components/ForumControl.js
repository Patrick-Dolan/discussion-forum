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
      mainPostList: [
        {
          title: "A title",
          author: "Patrick",
          postBody: "THIS IS THE BODY",
          date: "Today sometime",
          id: "1",
          key: "1"
        },
        {
          title: "Another title",
          author: "Nick",
          postBody: "THIS IS THE BODY FOR THE SECOND ONE",
          date: "Today sometime againj",
          id: "2",
          key: "2"
        }
      ]
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage 
    }));
  }

  handleAddingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({mainPostList: newMainPostList,
                  formVisibleOnPage: false});
  }
  
  render() {
    let currentlyVisibleState = null;
    let buttonText

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>;
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

ForumControl.propTypes = {
  mainPostList: PropTypes.array,
  // formVisibleOnPage: PropTypes.bool
}

export default ForumControl;