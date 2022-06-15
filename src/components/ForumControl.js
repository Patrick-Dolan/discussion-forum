import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostDetail from './PostDetail';

class ForumControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage 
      }));
    }
  }

  handleChangingSelectedPost = id => {
    const selectedPost = this.props.mainPostList[id];
    this.setState({selectedPost: selectedPost});
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
  }

  handleDeletingPost = id => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_POST",
      id
    };
    dispatch(action);
    this.setState({selectedPost: null});
  }
  
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail post={this.state.selectedPost} onClickingDelete={this.handleDeletingPost} />
      buttonText="Return to Post List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>;
      buttonText="Return to Post List";
    } else {
      currentlyVisibleState = <PostList postList={this.props.mainPostList} onPostSelection={this.handleChangingSelectedPost} />
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
}

const mapStateToProps = state => {
  return {
    mainPostList: state
  }
}

ForumControl = connect(mapStateToProps)(ForumControl);

export default ForumControl;