import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8534e0c0&s=black")
      .then((data) => data.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    return <main></main>;
  }
}

export default Main;
