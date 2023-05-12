import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__img">
          <a href="#!">
            <img
              src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/play-icon-18-256.png"
              alt=""
            />
          </a>
        </div>
        <div className="page-footer">
          <div className="footer-copyright">
            <div className="container">
              <h3>&copy; {new Date().getFullYear()} Copyright Reserved</h3>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
