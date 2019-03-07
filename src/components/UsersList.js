import React from "react";
import PropTypes from "prop-types";

const User = ({ userInfo }) => (
  <div className="user">
    <h2>{userInfo.login}</h2>
  </div>
);

const UsersList = ({ users }) => (
  <div className="usersList">
    {users.map(user => (
      <User key={user.id} userInfo={user} />
    ))}
  </div>
);

export default UsersList;
