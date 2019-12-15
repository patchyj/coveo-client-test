import axios from 'axios';
import qs from 'qs';
import config from '../../config';

const { URL, TOKEN, rapidApi } = config;

export const getRequest = ({ url, endpoint }) => axios.get(`${url}/${endpoint}`);

export const rapidAPIRequest = ({ query }) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-rapidapi-host': rapidApi.HOST,
    'x-rapidapi-key': rapidApi.KEY
  };

  const queryString = `?query=${query}`;

  return axios({
    method: 'GET',
    headers,
    url: `${rapidApi.URL}${query ? queryString : ''}`
  });
};

export const postRequest = ({ query }) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: TOKEN
  };

  return axios({
    method: 'POST',
    headers,
    url: URL,
    data: qs.stringify(query)
  });
};
