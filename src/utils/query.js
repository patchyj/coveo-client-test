import axios from 'axios';
import config from '../../config';

const { URL, TOKEN } = config;

// eslint-disable-next-line import/prefer-default-export
export const getRequest = ({ query }) => axios.get(`${URL}?access_token=${TOKEN}&q=${query}`);

export const postRequest = ({ query }) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: TOKEN,
  };
  return axios({
    method: 'POST',
    headers,
    url: URL,
    data: query
  });
};
