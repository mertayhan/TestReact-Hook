import React, { Component } from "react";
import { BrowserRouter, Route ,Switch} from "react-router-dom";
import UserList from "./UsersList";
import AlbumList from "./AlbumsList";
import Header from "./Header";
import NotFound from "./NotFound";


export default class App extends Component {


  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Header></Header>

          <div className="ui grid">
            <Switch>
            <Route exact path="/"></Route>           
            <Route
              exact
              path="/userlist"
              component={UserList}
            ></Route>
            <Route
              exact
              path="/albumlist/:id"
              component={AlbumList}           
            ></Route>
             <Route
              exact
              path="/albumlist"
              component={AlbumList}           
            ></Route>
            
             <Route exact component={NotFound}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
