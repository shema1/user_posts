import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditPost extends Component {
  // state = {
  //   title: "",
  //   body: ""
  // };

  constructor(props){
    super(props)
    this.state = {
      title: props.curentPost.title,
        body: props.curentPost.body
    }
  }
  componentDidMount() {
    this.setState({
      title: this.props.curentPost.title,
      body: this.props.curentPost.body
    });
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
            value={this.props.curentPost.body}
            onChange={() => this.handleChange(event)}
          />
          <div className="control-btn">
            <button
              className="btn update__btn"
              onClick={() => this.handlePostUpdate(this.props.curentPost.id)}
            >
              update
            </button>
            <Link to="posts">
              <button
                className="btn delete__btn"
                onClick={() => this.props.onDeletePost(this.props.curentPost.id)}
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
