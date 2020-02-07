import React, { Component } from "react";

class Popup extends Component {
  state = {
    title: "",
    body: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handlePostCreate=()=>{
    this.props.onCreatePost(this.state.title, this.state.body)
    this.setState({
        title: "",
        body: ""
    })
  }

  render() {
    const { isOpen, handleClosePopup, } = this.props;
    if (!isOpen) return null;
    return (
      <div className="popup">
        <div className="main">
          <div className="header">
            <h1 className="title">Add new post</h1>
            <button className="btn-close" onClick={handleClosePopup}>
              x
            </button>
          </div>
          <div className="edit-post">
            <input
              className="post-title"
              type="text"
              name="title"
              onChange={() => this.handleChange(event)}
            />
            <textarea
              className="post-field"
              rows="10"
              cols="45"
              name="body"
              onChange={() => this.handleChange(event)}
            />
            <div className="control-btn">
              <button className="btn update__btn" onClick={this.handlePostCreate}>ADD</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Popup;
