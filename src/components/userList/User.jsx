import React, { Component } from "react";
import { Link } from "react-router-dom";
const User = ({ userParam, onReturnId }) => {
  
  return (
    <li className="list-item">
      <span className="list-item__name">{userParam.name}</span>{" "}
      <Link to="/posts">
        <button
          className="list-item__button"
          onClick={() => onReturnId(userParam.id)}
        >
          posts
        </button>
      </Link>
    </li>
  );
};

export default User;
