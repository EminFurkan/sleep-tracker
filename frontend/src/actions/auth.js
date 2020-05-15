import axios from 'axios';
import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT
} from './types';

// Register User
export const register = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = (email, password);

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Login user
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = (email, password);

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Load User
export const load = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT
  });
};
