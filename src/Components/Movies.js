import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movies">
        {movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })}
      </div>
    );
  }
}

export default Movies;
