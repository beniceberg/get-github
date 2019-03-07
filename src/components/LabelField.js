import React from "react";
import PropTypes from "prop-types";

const LabelField = ({ label, info }) => (
  <div className="labelField">
    <span className="label">{`${label}:`}</span>
    <span className="info">{info}</span>
  </div>
);

LabelField.propTypes = {
  label: PropTypes.string,
  info: PropTypes.string
};

export default LabelField;
