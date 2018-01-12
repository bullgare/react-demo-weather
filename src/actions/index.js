import axios from 'axios';

const API_KEY = '54a5dc361bbaeb9ce2f03cb965d20aa2';

const URL_PREFIX = `https://api.openweathermap.org/data/2.5/forecast`;

export const ACTION_TYPE_FETCH = 'ACTION_TYPE_FETCH';
export const ACTION_REMOVE_WEATHER = 'ACTION_REMOVE_WEATHER';
export const ACTION_UPDATE_WEATHER = 'ACTION_UPDATE_WEATHER';

export function fetchWeather(city) {
  const promise = fetch(city);

  return {
    type: ACTION_TYPE_FETCH,
    payload: promise
  };
}

export function updateWeather(city, pos, cb) {
  const promise = fetch(city);
  return {
    type: ACTION_UPDATE_WEATHER + pos,
    payload: promise.then((data) => {cb(); return data;})
  };
}

export function removeWeather(pos) {
  return {
    type: ACTION_REMOVE_WEATHER,
    position: pos
  };
}

function fetch(city) {
  const url = `${URL_PREFIX}?q=${city},ru&appid=${API_KEY}`;
  return axios.get(url);
}
