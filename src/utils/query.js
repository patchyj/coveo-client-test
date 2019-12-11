import axios from 'axios';
import config from '../../config';

const { URL, TOKEN } = config;

// eslint-disable-next-line import/prefer-default-export
export const getRequest = ({ query }) => axios.get(`${URL}?access_token=${TOKEN}&q=${query}`);
