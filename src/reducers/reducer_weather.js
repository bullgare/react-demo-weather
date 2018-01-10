import {ACTION_TYPE_FETCH} from '../actions/index';
import {ACTION_REMOVE_WEATHER} from '../actions/index';

export default function(state = [], action) {
  if (action.type === ACTION_TYPE_FETCH && action.payload.data) {
    return [...state, action.payload.data];
  }

  if (action.type === ACTION_REMOVE_WEATHER && action.position >= 0 && action.position < state.length) {
    return [...state.slice(0, action.position), ...state.slice(action.position + 1)];
  }

  return state;
}
