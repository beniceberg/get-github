import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import ListPage from "./pages/ListPage";
import DetailsPage from "./pages/DetailsPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ListPage} />
          <Route exact path="/:username/details" component={DetailsPage} />
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
