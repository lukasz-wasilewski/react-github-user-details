import _ from 'lodash';

export default function getUser(users, username) {
  if (_.has(users, username)) {
    return users[username];
  }
  return {};
}
