import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getGithubUsersList } from "./_actions";
import { getUsersList } from "./_selectors";

import "./App.css";
import Search from "./components/Search";
import UsersList from "./components/UsersList";

class App extends Component {
  doOnSeach = user => {
    this.props.dispatch(getGithubUsersList(user));
  };

  render() {
    const { users } = this.props;
    return (
      <div className="App">
        <header>
          <h1 className="title">Github user list</h1>
        </header>
        <section className="searchSection">
          <Search doOnSeach={this.doOnSeach} />
        </section>
        <section className="listSection">
          {users && <UsersList users={users} />}
        </section>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    users: getUsersList(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
