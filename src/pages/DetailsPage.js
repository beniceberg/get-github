import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class DetailsPage extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="DetailsPage">
        <header className="pageHeader">
          <h1 className="title">User Details</h1>
        </header>
      </div>
    );
  }
}

DetailsPage.propTypes = {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPage);
