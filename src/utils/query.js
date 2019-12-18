import axios from 'axios';
import config from '../../config';

const { URL, TOKEN, rapidApi } = config;

export const getRequest = ({ url, endpoint }) =>
  axios({
    method: 'GET',
    url: `${url}/${endpoint}`
  });

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
    data: JSON.stringify({
      q: query,
      count: 20,
      locale: 'en-US'
    })
  });
};

export const rapidAPIRequest = ({ query, api, options = {} }) => {
  let url = rapidApi[api].URL;

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-rapidapi-host': rapidApi[api].HOST,
    'x-rapidapi-key': rapidApi.KEY
  };

  if (api === 'openBrewery') {
    url += query ? `?query=${query}` : '';
  }
  if (api === 'gws') {
    headers.authorization = `Token ${rapidApi[api].TOKEN}`;
  }

  return axios({
    method: 'GET',
    headers,
    url,
    ...options
  });
};
