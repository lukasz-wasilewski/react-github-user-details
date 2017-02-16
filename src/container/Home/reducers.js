import { FETCH_USER_DATA_SUCCEED, SET_USER_NAME } from './const';

const initState = {
  username: '',
  users: {},
};

const users = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_SUCCEED:
      return {
        username: action.username,
        users: {
          ...state.users,
          [action.username]: Object.assign({}, state.users[action.username], action.data),
        },
      };
    case SET_USER_NAME:
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
};

export default users;
