import React, { Component } from "react";
import { Link } from "react-router-dom";
import { updatePost, deletePost, fetchUserPost } from "../../gateway";
import Loader from "../loader/Loader";

class EditPost extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetchUserPost(this.props.curentId).then(post =>
      this.setState({
        title: post.title,
        body: post.body
      })
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handlePostUpdate = () => {
    const newPost = {
      title: this.state.title,
      body: this.state.body
    };

    updatePost(this.props.curentId, newPost);
    this.setState({
      title: "",
      body: ""
    });
  };

  handleDeletePost = id => {
    deletePost(id);
  };

  render() {
    return (
      <div className="main">
        {this.state.title == "" && <Loader />}
        <div className="header">
          <Link to="/posts">
            <i className="material-icons">arrow_back_ios</i>
          </Link>
          <h1 className="title">Edit post</h1>
        </div>
        <div className="edit-post">
          <input
            className="post-title"
            type="text"
            name="title"
            value={this.state.title}
            onChange={() => this.handleChange(event)}
          />
          <textarea
            className="post-field"
            rows="10"
            cols="45"
            name="body"
            value={this.state.body}
            onChange={() => this.handleChange(event)}
          />
          <div className="control-btn">
            <Link to="posts">
              <button
                className="btn update__btn"
                onClick={() => this.handlePostUpdate()}
              >
                update
              </button>
            </Link>
            <Link to="posts">
              <button
                className="btn delete__btn"
                onClick={() => this.handleDeletePost()}
              >
                delete
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default EditPost;
