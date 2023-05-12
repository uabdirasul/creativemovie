import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header__nav">
          <a href="#!">Creative Movie App</a>
          <ul>
            <li>
              <a href="#!">Movies</a>
            </li>
            <li>
              <a href="#!">Serials</a>
            </li>
            <li>
              <a href="#!">Logout</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
