import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ForumControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      formVisibleOnPage: false,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage 
    }));
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const action = {
      type: "ADD_POST",
      author: newPost.author,
      title: newPost.title,
      date: newPost.date,
      postBody: newPost.postBody,
      id: newPost.id
    };
    dispatch(action);
    this.setState({formVisibleOnPage: false});
    //const newMainPostList = this.state.mainPostList.concat(newPost);
    //this.setState({mainPostList: newMainPostList,
                  // formVisibleOnPage: false});
  }
  
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>;
      buttonText = "Back";
    } else {
      currentlyVisibleState = <PostList postList={this.props.mainPostList} />
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
  mainPostList: PropTypes.object
  // formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    mainPostList: state
  }
}

ForumControl = connect(mapStateToProps)(ForumControl);

export default ForumControl;