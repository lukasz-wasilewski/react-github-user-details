import React, { PropTypes } from 'react';
import './styles.css';
import ListComponent from '../UserList';

function UserData(props) {
  return (
    <section>
      <div className="user-data-container">
        <div className="user-data-item start">
          <div>
            <span>Name</span>
          </div>
          <div>
            <span>Company</span>
          </div>
          <div>
            <span>Email</span>
          </div>
        </div>
        <div className="user-data-item end">
          <div>
            <span>{props.name }</span>
          </div>
          <div>
            <span>{props.company }</span>
          </div>
          <div>
            <span>{props.email }</span>
          </div>
        </div>
        <div className="user-data-item start">
          <div>
            <span>Gravatar_id</span>
          </div>
        </div>
        <div className="user-data-item end">
          <div>
            <img src={props.gravatar_id} alt="gravatar" />
          </div>
        </div>
      </div>
      <div className="connected-user">
        <ListComponent items={props.followers} onChange={props.onChange} title="Followers list" />
        <ListComponent items={props.following} onChange={props.onChange} title="Following list" />
      </div>
    </section>
  );
}

UserData.defaultProps = {
  name: '',
  company: '',
  email: '',
  gravatar_id: '',
  followers: [],
  following: [],
};

UserData.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  company: PropTypes.string,
  email: PropTypes.string,
  gravatar_id: PropTypes.string,
  followers: PropTypes.arrayOf(PropTypes.object),
  following: PropTypes.arrayOf(PropTypes.object),
};

export default UserData;
