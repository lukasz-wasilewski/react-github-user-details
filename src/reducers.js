import { combineReducers } from 'redux';
import HomeReducer from './container/Home/reducers';

const appReducers = combineReducers({
  HomeReducer,
});

export default appReducers;
