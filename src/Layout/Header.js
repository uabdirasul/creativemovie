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
          <a href="#!">
            <img
              src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/play-icon-18-256.png"
              alt=""
            />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
