import axios from 'axios';
import config from '../../config';

const { URL, TOKEN, rapidApi } = config;

export const getRequest = ({ url, endpoint }) =>
  axios.get(`${url}/${endpoint}`);

export const rapidAPIRequest = ({ query, api, options = {} }) => {
  let url;
  let queryString;

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-rapidapi-host': rapidApi[api].HOST,
    'x-rapidapi-key': rapidApi.KEY
  };

  switch (api) {
    case 'openBrewery':
      queryString = `?query=${query}`;
      url = `${rapidApi[api].URL}${query ? queryString : ''}`;
      break;
    case 'gws':
      url = rapidApi[api].URL;
      headers.authorization = `Token ${rapidApi[api].TOKEN}`;
      break;
    default:
      break;
  }

  return axios({
    method: 'GET',
    headers,
    url,
    ...options
  });
};

export const postRequest = ({ query }) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`
  };

  return axios({
    method: 'POST',
    headers,
    url: URL,
    data: {
      q: query
    }
  });
};
