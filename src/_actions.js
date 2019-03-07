export const SET_USERS_LIST = "SET_USERS_LIST";

const setUsersList = users => ({
  type: SET_USERS_LIST,
  users
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
