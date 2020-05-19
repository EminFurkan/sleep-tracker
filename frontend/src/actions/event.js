import axios from 'axios';
import { GET_EVENTS, SET_EVENT, EVENT_ERROR } from './types';
import { setAlert } from '../actions/alert';

export const getEvents = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/event');

    dispatch({
      type: GET_EVENTS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

export const setEvent = () => async (dispatch) => {
  try {
    const res = await axios.post('/api/event');

    dispatch({
      type: SET_EVENT,
      payload: res.data
    });

    dispatch(setAlert('Nice one! streak successfully added', 'success'));
  } catch (error) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
