import React from "react";
import { Link } from "react-router-dom";

const Post = ({ userPosts, onReturnId }) => {
  return (
    <li className="list-item">
      <span className="list-item__post">
       {userPosts.title}
      </span>
      <Link to="/post">
        <button
          className="list-item__button"
          onClick={() =>onReturnId(userPosts.id)}
        >
          details
        </button>
        </Link>
    </li>
  );
};
export default Post;
