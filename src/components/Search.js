import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: props.searchText
    };
  }

  handleChange = event => this.setState({ search: event.target.value });
  doSeachClick = () => this.props.doOnSeach(this.state.search);
  doKeyPress = e => e.key === "Enter" && this.doSeachClick();

  render() {
    const { search } = this.state;

    return (
      <div className="search">
        <div className="inputContainer">
          <input
            className="searchInput"
            type="text"
            placeholder="Find user"
            value={search}
            onChange={this.handleChange}
            onKeyPress={this.doKeyPress}
          />
          <button
            className={`searchBtn ${!search ? `disabled` : ""}`}
            onClick={this.doSeachClick}
            disabled={!search}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  doOnSeach: PropTypes.func
};

export default Search;
