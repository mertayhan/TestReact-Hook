import React from "react";
import {Link} from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <div className="ui menu">
        <div className="header item">Test</div>
        <div className="right menu">
        <Link className="item" to="/">Main Page</Link>
        <Link className="item" to="/userlist">UserList</Link>
        <Link className="item" to="/albumlist">AlbumList</Link>
        </div>
      </div>
    );
  }
}

export default Header;
