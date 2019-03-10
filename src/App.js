import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import ListPage from "./pages/ListPage";
import DetailsPage from "./pages/DetailsPage";
import ErrorPage from "./pages/ErrorPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ListPage} />
          <Route exact path="/:username/details" component={DetailsPage} />
          <Route path="/error" component={ErrorPage} />
          <Redirect from="/*" to="/error" />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    state
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
  )(App)
);
