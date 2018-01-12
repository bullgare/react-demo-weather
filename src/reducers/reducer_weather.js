import {ACTION_TYPE_FETCH, ACTION_REMOVE_WEATHER, ACTION_UPDATE_WEATHER} from '../actions/index';

export default function(state = [], action) {
  if (action.type === ACTION_TYPE_FETCH && action.payload.data) {
    return [...state, addTimestamp(action.payload.data)];
  }

  if (action.type.startsWith(ACTION_UPDATE_WEATHER) && action.payload.data ) {
    const pos = + (action.type.replace(ACTION_UPDATE_WEATHER, ''));
    if (pos < 0 || pos >= state.length) {
      return state;
    }

    return [...state.slice(0, pos), addTimestamp(action.payload.data), ...state.slice(pos + 1)];
  }

  if (action.type === ACTION_REMOVE_WEATHER && action.position >= 0 && action.position < state.length) {
    return [...state.slice(0, action.position), ...state.slice(action.position + 1)];
  }

  return state;
}

function addTimestamp(data) {
  return {...data, ts: +(new Date)};
}
