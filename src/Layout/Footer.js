import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            <h3>&copy; {new Date().getFullYear()} Copyright Reserved</h3>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
