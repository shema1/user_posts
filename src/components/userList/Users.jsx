import React, { Component } from "react";
import User from './User'

const Users =({users,onReturnId})=> {
 
    return (
     <div className="main">
         <h1 className="title">users</h1>
         <ul className ="list">

             {users.map(user =>(
                <User key={user.id} userParam={user} onReturnId={onReturnId}/> 
             ))}
         </ul>
     </div>
    );
  }

export default Users;
