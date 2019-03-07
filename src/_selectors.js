export const getSearch = state => state.search;

export const getUsersList = state => state.users;

export const getUsersListSize = state => state.usersListSize;

export const getUserDetails = state => {
  const { usersDetails } = state;
  return username => {
    return usersDetails[username];
  };
};
