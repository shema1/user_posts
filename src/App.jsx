import React, { Component } from "react";
import Users from "./components/userList/Users";
import Posts from "./components/posts/Posts";
import EditPost from "./components/posts/EditPost";
import Popup from "./components/popup/Popup";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { fetchUsers, fetchUserPosts, fetchUserPost, createPost, deletePost,updatePost } from "./gateway";

class App extends Component {
  state = {
    users: [],
    userPosts: [],
    curentPost: [],
    isOpen: false,
    isEdit: false
  };

  componentDidMount() {
    // this.fetchUsers();
    fetchUsers().then(user =>
      this.setState({
        users: user
      })
    );
  }

  handleGetIdPost = id => {
    fetchUserPosts(id).then(post =>
      this.setState({
        userPosts: post
      })
    );
  };

  handleOpenPopup = () => {
    this.setState({
      isOpen: true
    });
  };

  handleGetSelectPost = id => {
    fetchUserPost(id).then(post =>
      this.setState({
        curentPost: post
      })
    );
  };

  handleClosePopup = () => {
    this.setState({
      isOpen: false,
      isEdit: false
    });
  };

  onCreatePost = (title, body) => {
    const newPost = {
      title,
      body
    };
    this.setState({
      isOpen: false
    });
    createPost(newPost)
    console.log(newPost);
  };

  onDeletePost = id => {
    deletePost(id)
  };

  onUpdatePost = (id, title, body) => {
    console.log(id, title, body);
    const newPost = {
      title,
      body
    };
    updatePost(id,newPost)
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Users users={this.state.users} onReturnId={this.handleGetIdPost} />
          </Route>
          <Route path="/posts">
            <Posts
              userPosts={this.state.userPosts}
              handleOpenPopup={this.handleOpenPopup}
              handleGetSelectPost={this.handleGetSelectPost}
            />
          </Route>
          <Route path="/post">
            <EditPost
              handleClosePopup={this.handleClosePopup}
              curentPost={this.state.curentPost}
              onUpdatePost={this.onUpdatePost}
              onDeletePost={this.onDeletePost}
            />
          </Route>
        </Switch>
        {this.state.isOpen && (
          <Popup
            isOpen={this.state.isOpen}
            isEdit={this.state.isEdit}
            handleClosePopup={this.handleClosePopup}
            onCreatePost={this.onCreatePost}
          />
        )}
      </BrowserRouter>
    );
  }
}

export default App;
