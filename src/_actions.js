export const SET_USERS_LIST = "SET_USERS_LIST";
export const SET_USER_DETAILS = "SET_USER_DETAILS";
export const SET_LIST_SIZE = "SET_LIST_SIZE";
export const UPDATE_USERS_LIST = "UPDATE_USERS_LIST";
export const RESET_USERS_LIST_PAGE = "RESET_USERS_LIST_PAGE";
export const INCREMENT_LIST_PAGE = "INCREMENT_LIST_PAGE";
export const SET_SEARCH = "SET_SEARCH";

const setSearch = search => ({
  type: SET_SEARCH,
  search
});
const setUsersList = users => ({
  type: SET_USERS_LIST,
  users
});
const updateUsersList = users => ({
  type: UPDATE_USERS_LIST,
  users
});
const setListSize = size => ({
  type: SET_LIST_SIZE,
  size
});
const resetUsersListPage = () => ({
  type: RESET_USERS_LIST_PAGE
});
const incrementListPage = () => ({
  type: INCREMENT_LIST_PAGE
});
const setUserDetails = userDetails => ({
  type: SET_USER_DETAILS,
  userDetails,
  id: userDetails.login
});

export const getGithubUsersList = search => (dispatch, getState) => {
  const url = `https://api.github.com/search/users?q=${search}&page=1&per_page=20`;
  fetch(url)
    .then(resp => resp.json())
    .then(json => {
      dispatch(setSearch(search));
      dispatch(setUsersList(json.items));
      dispatch(setListSize(json.total_count));
      dispatch(resetUsersListPage());
    })
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

export const getNextListPage = () => (dispatch, getState) => {
  const { userListPage, search } = getState();
  const url = `https://api.github.com/search/users?q=${search}&page=${userListPage +
    1}&per_page=20`;
  fetch(url)
    .then(resp => resp.json())
    .then(json => {
      dispatch(updateUsersList(json.items));
      dispatch(incrementListPage());
    })
    .catch(error => {
      console.log(error);
    });
};
