import axios from 'axios';
import config from '../../config';

const { URL, TOKEN, rapidApi } = config;

export const getRequest = ({ url, endpoint }) =>
  axios({
    method: 'GET',
    url: `${url}/${endpoint}`
  });

export const httpGetRequest = ({ query, options }) => {
  const {
    minPrice,
    maxPrice,
    isBeerChecked,
    isWineChecked,
    isSpiritChecked
  } = options;

  // Construct query
  let price = '';
  if (minPrice && maxPrice) {
    price += `@tpprixnum>${minPrice};@tpprixnum<${maxPrice}`;
  } else if (minPrice) {
    price += `@tpprixnum>${minPrice}`;
  } else if (maxPrice) {
    price += `@tpprixnum<${maxPrice}`;
  }

  return axios({
    method: 'GET',
    url: URL,
    params: {
      access_token: TOKEN,
      q: `${query};${price}`
    }
  });
};

export const postRequest = ({ query, options }) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`
  };

  const {
    minPrice,
    maxPrice,
    isBeerChecked,
    isWineChecked,
    isSpiritChecked
  } = options;

  // Construct query
  let params = query;
  if (minPrice && maxPrice) {
    params += `&@tpprixnum>${minPrice};@tpprixnum<${maxPrice}`;
  } else if (minPrice) {
    params += `&@tpprixnum>${minPrice}`;
  } else if (maxPrice) {
    params += `&@tpprixnum<${maxPrice}`;
  }

  console.log(window.encodeURI(params));

  return axios({
    method: 'POST',
    headers,
    url: URL,
    data: JSON.stringify({
      q: window.encodeURI(params),
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
