import React, { Component } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import { fetchUserPosts } from "../../gateway";
import Loader from "../loader/Loader"
class Posts extends Component {

  state = {
    userPosts: ""
  };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.curentId !== this.props.curentId) {
  //     fetchUserPosts(this.props.curentId).then(post =>
  //       this.setState({
  //         posts: post
  //       })
  //     );
  //   }
  // }

  componentDidMount() {
    fetchUserPosts(this.props.curentId).then(post =>
      this.setState({
        userPosts: post
      })
    );
  }

  


  render() {
    return (
      <div className="main">
        <div className="header">
          <Link to="/">
            <i className="material-icons">home</i>
          </Link>
          <h1 className="title">posts</h1>
          <button className="btn btn__add" onClick={this.props.handleOpenPopup}>
            add
          </button>
        </div>
        <ul className="list">
          {this.state.userPosts ==""&& <Loader/>}
          {this.state.userPosts != "" &&
            this.state.userPosts.map(posts => (
              <Post
                key={posts.id}
                userPosts={posts}
                // handleGetSelectPost={handleGetSelectPost}
                onReturnId={this.props.handleGetIdPost}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
