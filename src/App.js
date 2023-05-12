import React, { Component } from "react";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Header />
        <Main />
        <Footer />
      </React.StrictMode>
    );
  }
}

export default App;
