import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = { user: "" };

  handleChange = event => this.setState({ user: event.target.value });
  doSeachClick = () => this.props.doOnSeach(this.state.user);
  doKeyPress = e => e.key === "Enter" && this.doSeachClick();

  render() {
    const { user } = this.state;

    return (
      <div className="search">
        <div className="inputContainer">
          <input
            className="searchInput"
            type="text"
            placeholder="Find user"
            value={user}
            onChange={this.handleChange}
            onKeyPress={this.doKeyPress}
          />
          <button
            className={`searchButton ${!user ? `disabled` : ""}`}
            onClick={this.doSeachClick}
            disabled={!user}
          >
            Search Users
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
