export const getUsersList = state => state.users;

export const getUserDetails = state => {
  const { usersDetails } = state;
  return username => {
    return usersDetails.username;
  };
};
