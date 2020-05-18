import { SET_ROUTINE } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ROUTINE:
      return [...state, payload];
    default:
      return state;
  }
}
