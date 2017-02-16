import React, { PropTypes } from 'react';
import './styles.css';

function UserList({ items, onChange, title }) {
  const listComponent = items ? items
    .map(user => (
      <li key={user.login}>
        <button onClick={() => onChange(user.login)}>{user.login}</button>
      </li>
    )) : [];
  return (
    <ul className="users-list">
      <h1 className="users-list-title">{title}</h1>
      {listComponent}
    </ul>
  );
}

UserList.defaultProps = {
  items: [],
  title: '',
};

UserList.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};

export default UserList;
