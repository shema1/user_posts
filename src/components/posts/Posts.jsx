import React, { useReducer } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
const Posts = ({ userPosts, handleOpenPopup, handleGetSelectPost }) => {
  return (
    <div className="main">
      <div className="header">
        <Link to="/">
          <i className="material-icons">home</i>
        </Link>
        <h1 className="title">posts</h1>
        <button className="btn btn__add" onClick={handleOpenPopup}>
          add
        </button>
      </div>
      <ul className="list">
        {userPosts.map(posts => (
          <Post
            key={posts.id}
            userPosts={posts}
            handleGetSelectPost={handleGetSelectPost}
          />
        ))}
      </ul>
    </div>
  );
};

export default Posts;
