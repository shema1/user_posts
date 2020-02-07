import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditPost extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.curentPost.title !== this.props.curentPost.title ||
      prevProps.curentPost.body !== this.props.curentPost.body
    ) {
      this.setState({
        title: this.props.curentPost.title,
        body: this.props.curentPost.body
      });
    }
    console.log("somesing change");
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handlePostUpdate = id => {
    this.props.onUpdatePost(id, this.state.title, this.state.body);
    this.setState({
      title: "",
      body: ""
    });
  };
  render() {
    return (
      <div className="main">
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
                onClick={() => this.handlePostUpdate(this.props.curentPost.id)}
              >
                update
              </button>
            </Link>
            <Link to="posts">
              <button
                className="btn delete__btn"
                onClick={() =>
                  this.props.onDeletePost(this.props.curentPost.id)
                }
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
