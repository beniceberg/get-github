import { SET_USERS_LIST } from "./_actions";

const initialState = {
  users: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_LIST:
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
};

export default reducer;
