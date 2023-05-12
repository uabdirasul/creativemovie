import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header__nav">
          <a href="#!" className="header__navbar-brand">
            Creative Movie App
          </a>
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

        <div className="header__img">
          <a href="#!"></a>
        </div>
      </header>
    );
  }
}

export default Header;
