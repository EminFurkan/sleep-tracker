import { GET_EVENTS, SET_EVENT, EVENT_ERROR } from '../actions/types';

const initialState = {
  events: [],
  loading: true,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EVENTS:
      return {
        ...state,
        events: payload,
        loading: false
      };
    case SET_EVENT:
      return {
        ...state,
        events: [payload, ...state.events],
        loading: false
      };
    case EVENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
