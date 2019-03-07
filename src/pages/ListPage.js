import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  getGithubUsersList,
  getGithubUserDetails,
  getNextListPage
} from "../_actions";
import {
  getUsersList,
  getUserDetails,
  getSearch,
  getUsersListSize
} from "../_selectors";

import Search from "../components/Search";
import UsersList from "../components/UsersList";

class ListPage extends Component {
  doOnSeach = user => {
    this.props.dispatch(getGithubUsersList(user));
  };

  doUserClick = username => {
    const { history } = this.props;
    history.push(`/${username}/details`);
  };

  showMore = () => {
    this.props.dispatch(getNextListPage());
  };

  render() {
    const { users, searchText, usersListSize } = this.props;
    const showShowMoreButton = users.length < usersListSize;
    return (
      <div className="listPage">
        <header className="pageHeader">
          <h1 className="title">Github user list</h1>
        </header>
        <section className="searchSection">
          <Search doOnSeach={this.doOnSeach} searchText={searchText} />
        </section>
        <section className="listSection" onScroll={this.onScroll}>
          {users && (
            <UsersList
              users={users}
              onUserClick={this.doUserClick}
              onShowMoreClick={this.showMore}
              showShowMoreButton={showShowMoreButton}
            />
          )}
        </section>
      </div>
    );
  }
}

ListPage.propTypes = {
  dispatch: PropTypes.func,
  userDetails: PropTypes.func,
  users: PropTypes.array,
  searchText: PropTypes.string,
  usersListSize: PropTypes.number
};

const mapStateToProps = state => {
  return {
    users: getUsersList(state),
    userDetails: getUserDetails(state),
    searchText: getSearch(state),
    usersListSize: getUsersListSize(state)
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
