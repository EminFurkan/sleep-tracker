import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import routine from './routine';
import event from './event';

export default combineReducers({
  auth,
  alert,
  routine,
  event
});
