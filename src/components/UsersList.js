import React from "react";
import PropTypes from "prop-types";

const User = ({ userInfo, onUserClick }) => (
  <div className="user" onClick={() => onUserClick(userInfo.login)}>
    <img src={userInfo.avatar_url} alt="avatar" className="userAvatar" />
    <div>
      <h2 className="userName">
        <a href={userInfo.html_url} target="_blank" rel="noopener noreferrer">
          {userInfo.login}
        </a>
      </h2>
    </div>
  </div>
);

User.propTypes = {
  userInfo: PropTypes.object,
  onUserClick: PropTypes.func
};

const UsersList = ({ users, onUserClick }) => (
  <div className="usersList">
    {users.map(user => (
      <User key={user.id} userInfo={user} onUserClick={onUserClick} />
    ))}
  </div>
);

UsersList.propTypes = {
  users: PropTypes.array,
  onUserClick: PropTypes.func
};

export default UsersList;
