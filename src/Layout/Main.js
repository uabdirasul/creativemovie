import React, { Component } from "react";
import Movies from "../Components/Movies";

class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8534e0c0&s=kung")
      .then((data) => data.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    return (
      <main className="container">
        <Movies movies={this.state.movies} />
      </main>
    );
  }
}

export default Main;
