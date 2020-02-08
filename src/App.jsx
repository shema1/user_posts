import React, { Component } from "react";
import Users from "./components/userList/Users";
import Posts from "./components/posts/Posts";
import EditPost from "./components/posts/EditPost";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    curentId: ""
  };

  handleGetIdPost = id => {
    this.setState({
      curentId: id
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Users users={this.state.users} onReturnId={this.handleGetIdPost} />
          </Route>
          <Route path="/posts">
            <Posts
              handleOpenPopup={this.handleOpenPopup}
              curentId={this.state.curentId}
              onReturnId={this.handleGetIdPost}
            />
          </Route>
          <Route path="/post">
            <EditPost
              handleClosePopup={this.handleClosePopup}
              curentId={this.state.curentId}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
