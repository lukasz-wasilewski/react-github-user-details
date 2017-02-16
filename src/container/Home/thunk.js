import { fetchUserSucceed } from './actions';

const GITHUB_URL = 'https://api.github.com';
const GITHUB_USERS_URL = `${GITHUB_URL}/users`;

function fetchGithub(url) {
  return fetch(`${GITHUB_USERS_URL}/${url}`);
}

function fetchUser(username) {
  return fetchGithub(username);
}

function fetchFollowing(username) {
  return fetchGithub(`${username}/following`);
}

function fetchFollowers(username) {
  return fetchGithub(`${username}/followers`);
}

function getUsersList(fetchFunc, dataName) {
  return (username) => {
    // TODO: Pagination of users list => next url in response header
    let header;
    return dispatch => fetchFunc(username)
      .then((response) => { header = response.headers.get('Link'); return response.json(); })
      .then((result) => {
        dispatch(fetchUserSucceed(username, { [dataName]: result, header }));
      });
  };
}

export function getFollowers(username) {
  return getUsersList(fetchFollowers, 'followers')(username);
}

export function getFollowing(username) {
  return getUsersList(fetchFollowing, 'following')(username);
}

export function getUserInfo(username) {
  return dispatch => fetchUser(username)
      .then(response => response.json())
      .then((result) => {
        const user = {
          name: result.name,
          company: result.company,
          email: result.email,
          gravatar_id: result.gravatar_id,
        };
        dispatch(fetchUserSucceed(username, user));
      });
}

export default getUserInfo;
