import { SET_USERS_LIST, SET_USER_DETAILS } from "./_actions";

const initialState = {
  users: [],
  usersDetails: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_LIST:
      return {
        ...state,
        users: action.users
      };
    case SET_USER_DETAILS:
      return {
        ...state,
        usersDetails: Object.assign({}, state.usersDetails, {
          [action.id]: action.userDetails
        })
      };
    default:
      return state;
  }
};

export default reducer;
