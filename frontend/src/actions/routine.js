import axios from 'axios';
import { setAlert } from './alert';
import { SET_ROUTINE } from './types';

// Set Routine
export const setRoutine = (routine) => async (dispatch) => {
  try {
    const res = await axios.put('/api/users/me', routine);

    dispatch({
      type: SET_ROUTINE,
      payload: res.data
    });

    dispatch(setAlert(res.data.string));
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }
  }
};
