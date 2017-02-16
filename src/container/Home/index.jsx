import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import DebounceInput from '../../component/DebounceInput';
import { getFollowers, getFollowing, getUserInfo } from './thunk';
import { setUserName } from './actions';
import './styles.css';
import UserData from '../../component/UserData';

class Home extends Component {
  constructor(props) {
    super(props);
    this.onChangeCheck = this.onChangeCheck.bind(this);
  }

  onChangeCheck(username) {
    if (_.has(this.props.users, username)) {
      this.props.setUserName(username);
    } else {
      this.props.onChange(username);
    }
  }

  render() {
    return (
      <div className="App-intro">
        <div className="input-container">
          <DebounceInput
            onChange={this.onChangeCheck}
            debounceTime={1000}
          />
        </div>
        <UserData {...this.props.userData} onChange={this.onChangeCheck} />
      </div>
    );
  }
}

Home.defaultProps = {
  userData: {},
  users: {},
};

Home.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  setUserName: React.PropTypes.func.isRequired,
  userData: React.PropTypes.shape({}),
  users: React.PropTypes.shape({}),
};

function getUser(users, username) {
  if (_.has(users, username)) {
    return users[username];
  }
  return {};
}

function mapStateToProps(state) {
  return {
    users: state.HomeReducer.users,
    userData: getUser(state.HomeReducer.users, state.HomeReducer.username),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (username) => {
      dispatch(getUserInfo(username));
      dispatch(getFollowers(username));
      dispatch(getFollowing(username));
    },
    setUserName: username => dispatch(setUserName(username)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
