import React, { Component } from "react";
import Movies from "../Components/Movies";
import SearchBar from "../Components/SearchBar";

class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8534e0c0&s=avengers")
      .then((data) => data.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (text) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8534e0c0&s=${text}`)
      .then((data) => data.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    return (
      <main className="container">
        <SearchBar searchMovies={this.searchMovies} />
        <Movies movies={this.state.movies} />
      </main>
    );
  }
}

export default Main;
