export const SET_USERS_LIST = "SET_USERS_LIST";
export const SET_USER_DETAILS = "SET_USER_DETAILS";

const setUsersList = users => ({
  type: SET_USERS_LIST,
  users
});
const setUserDetails = userDetails => ({
  type: SET_USER_DETAILS,
  userDetails,
  id: userDetails.login
});

export const getGithubUsersList = user => (dispatch, getState) => {
  const url = `https://api.github.com/search/users?q=${user}`;
  fetch(url)
    .then(resp => resp.json())
    .then(json => dispatch(setUsersList(json.items)))
    .catch(error => {
      console.log(error);
    });
};

export const getGithubUserDetails = username => (dispatch, getState) => {
  const url = `https://api.github.com/users/${username}`;
  fetch(url)
    .then(resp => resp.json())
    .then(userDetails => dispatch(setUserDetails(userDetails)))
    .catch(error => {
      console.log(error);
    });
};
