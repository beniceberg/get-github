import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getGithubUsersList, getGithubUserDetails } from "../_actions";
import { getUsersList } from "../_selectors";

import Search from "../components/Search";
import UsersList from "../components/UsersList";

class ListPage extends Component {
  doOnSeach = user => {
    this.props.dispatch(getGithubUsersList(user));
  };

  doUserClick = username => {
    this.props.dispatch(getGithubUserDetails(username));
    this.props.history.push(`/${username}/details`);
  };

  render() {
    const { users } = this.props;
    return (
      <div className="ListPage">
        <header className="pageHeader">
          <h1 className="title">Github user list</h1>
        </header>
        <section className="searchSection">
          <Search doOnSeach={this.doOnSeach} />
        </section>
        <section className="listSection">
          {users && <UsersList users={users} onUserClick={this.doUserClick} />}
        </section>
      </div>
    );
  }
}

ListPage.propTypes = {
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListPage)
);
