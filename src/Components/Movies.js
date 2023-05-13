import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  render() {
    const { movies = [] } = this.props;
    return (
      <div className="movies">
        {movies.length ? (
          movies.map((movie) => {
            return <Movie key={movie.imdbID} {...movie} />;
          })
        ) : (
          <h2>Data is not found</h2>
        )}
      </div>
    );
  }
}

export default Movies;
