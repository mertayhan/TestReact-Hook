import React from "react";
import { BrowserRouter, Route ,Switch} from "react-router-dom";
import UserListHook from './UserListHook';
import AlbumListHook from "./AlbumListHook";
import Header from "./Header";
import NotFound from "./NotFound";
import NewApi from "./NewApi";


const App = ()=> {



    return (
      <div className="ui container">
        <BrowserRouter>
          <Header></Header>

          <div className="ui grid">
            <Switch>
            <Route exact path="/" component={NewApi}></Route>           
            <Route
              exact
              path="/userlist"
              component={UserListHook}
            ></Route>
            <Route
              exact
              path="/albumlist/:id"
              component={AlbumListHook}           
            ></Route>
             <Route
              exact
              path="/albumlist"
              component={AlbumListHook}           
            ></Route>
            
             <Route exact component={NotFound}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  
}
export default App;