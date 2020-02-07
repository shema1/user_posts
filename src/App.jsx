import React, { Component } from "react";
import Users from "./components/userList/Users";
import Posts from "./components/posts/Posts";
import EditPost from "./components/posts/EditPost";
import Popup from "./components/popup/Popup";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from "./components/loader/Loader"

class App extends Component {
  state = {
    isOpen: false,
    curentId:''
  };

 
  handleGetIdPost = id => {
      this.setState({
        curentId: id
      })
  };

  handleOpenPopup = () => {
    this.setState({
      isOpen: true
    });
  };

  handleClosePopup = () => {
    this.setState({
      isOpen: false,
      isEdit: false
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
        {this.state.isOpen && (
          <Popup
            isOpen={this.state.isOpen}
            handleClosePopup={this.handleClosePopup}
            onCreatePost={this.onCreatePost}
          />
        )}
      </BrowserRouter>
    );
  }
}

export default App;
