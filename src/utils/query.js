import axios from 'axios';
import qs from 'qs';
import config from '../../config';

const { URL, TOKEN } = config;

export const getRequest = ({ url, endpoint }) => axios.get(`${url}/${endpoint}`);

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
