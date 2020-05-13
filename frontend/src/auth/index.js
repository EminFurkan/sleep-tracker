import axios from 'axios';
import { setAuthToken } from './setAuthToken';

// Register user
export const register = async ({ email, password }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('/api/users', body, config);
    console.log(res.data);
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
  }
};

// Login user
export const login = async (email, password) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);
    localStorage.setItem('token', res.data.token);
    console.log(res.data);
  } catch (error) {
    const errors = err.response.data.errors;
    console.log(errors);
  }
};

// Load user
export const loadUser = async () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

// Logout
export const logout = () => {
  localStorage.removeItem('token');
};
