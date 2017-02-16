import { FETCH_USER_DATA_SUCCEED, SET_USER_NAME } from './const';

export function fetchUserSucceed(username, data) {
  return {
    type: FETCH_USER_DATA_SUCCEED,
    username,
    data,
  };
}

export function setUserName(username) {
  return {
    type: SET_USER_NAME,
    username,
  };
}

export default [
  fetchUserSucceed,
  setUserName,
];
