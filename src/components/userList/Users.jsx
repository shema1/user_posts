import React, { Component } from "react";
import User from "./User";
import { fetchUsers } from "../../gateway";
import Loader from "../loader/Loader"
class Users extends Component {
  // отримати всіх юзерів
  // https://jsonplaceholder.typicode.com/users

  state = {
    users: ""
  };

//   componentDidUpdate(prevState) {
//     if (prevState.users !== this.state.users) {
//       fetchUsers().then(user =>
//         this.setState({
//           users: user
//         })
//       );
//     }
//   }

  componentDidMount() {
    fetchUsers().then(user =>
      this.setState({
        users: user
      })
    );
  }

  render() {
    return (
      <div className="main">
        <h1 className="title">users</h1>
        <ul className="list">
           {this.state.users ==""&& <Loader/>}
          {this.state.users != "" &&
            this.state.users.map(user => (
              <User
                key={user.id}
                userParam={user}
                onReturnId={this.props.onReturnId}
              />
            ))}
        </ul>
      </div>
    );
  }
}
export default Users;
