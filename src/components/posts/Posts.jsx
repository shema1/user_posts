import React, { Component } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import { fetchUserPosts } from "../../gateway";
import Loader from "../loader/Loader";
import Popup from "../popup/Popup";

class Posts extends Component {
  state = {
    isOpen: false,
    userPosts: ""
  };

  componentDidMount() {
    fetchUserPosts(this.props.curentId).then(post =>
      this.setState({
        userPosts: post
      })
    );
  }

  handleOpenPopup = () => {
    this.setState({
      isOpen: true
    });
  };

  handleClosePopup = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <>
        <div className="main">
          <div className="header">
            <Link to="/">
              <i className="material-icons">home</i>
            </Link>
            <h1 className="title">posts</h1>
            <button className="btn btn__add" onClick={this.handleOpenPopup}>
              add
            </button>
          </div>
          <ul className="list">
            {this.state.userPosts == "" && <Loader />}
            {this.state.userPosts != "" &&
              this.state.userPosts.map(posts => (
                <Post
                  key={posts.id}
                  userPosts={posts}
                  onReturnId={this.props.handleGetIdPost}
                />
              ))}
          </ul>
        </div>
        {this.state.isOpen && (
          <Popup
            isOpen={this.state.isOpen}
            handleClosePopup={this.handleClosePopup}
          />
        )}
      </>
    );
  }
}

export default Posts;
