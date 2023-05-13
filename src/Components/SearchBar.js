import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = {
      search: "",
    };
  }

  handleText = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    const { search } = this.state;
    return (
      <div className="search">
        <div className="search-bar">
          <input
            type="search"
            name="search"
            required
            value={search}
            onKeyUp={this.handleText}
            autoComplete="off"
            onChange={(e) =>
              this.setState({
                search: e.target.value,
              })
            }
          />
          <button className="search-btn" type="submit">
            <span>Search</span>
          </button>
        </div>
        <div className="radio-toggles">
          <input
            type="radio"
            id="option-1"
            name="radio-options"
            data-type="movie"
          />
          <label htmlFor="option-1">Movie</label>
          <input type="radio" id="option-2" name="radio-options" />
          <label htmlFor="option-2">All</label>
          <input type="radio" id="option-2" name="radio-options" />
          <label className="option-3">Series</label>
          <div className="slide-item"></div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
