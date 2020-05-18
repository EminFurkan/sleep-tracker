import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import routine from './routine';

export default combineReducers({
  auth,
  alert,
  routine
});
