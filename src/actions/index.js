import axios from 'axios';

const API_KEY = '54a5dc361bbaeb9ce2f03cb965d20aa2';

const URL_PREFIX = `https://api.openweathermap.org/data/2.5/forecast`;

export const ACTION_TYPE_FETCH = 'ACTION_TYPE_FETCH';
export const ACTION_REMOVE_WEATHER = 'ACTION_REMOVE_WEATHER';

export function fetchWeather(city) {
  const url = `${URL_PREFIX}?q=${city},ru&appid=${API_KEY}`;
  const promise = axios.get(url);

  return {
    type: ACTION_TYPE_FETCH,
    payload: promise
  };
}

export function removeWeather(pos) {
  return {
    type: ACTION_REMOVE_WEATHER,
    position: pos
  };
}
