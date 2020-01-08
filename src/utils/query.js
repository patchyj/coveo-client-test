import axios from 'axios';
import config from '../../config';

const { URL, TOKEN, rapidApi } = config;

export const getRequest = ({ url, endpoint }) =>
  axios({
    method: 'GET',
    url: `${url}/${endpoint}`
  });

export const httpGetRequest = ({ query, options }) => {
  const { minPrice, maxPrice, types } = options;

  // Construct query
  // PRICE
  let price = '';
  if (minPrice && maxPrice) {
    price += `@tpprixnum>${minPrice};@tpprixnum<${maxPrice}`;
  } else if (minPrice) {
    price += `@tpprixnum>${minPrice}`;
  } else if (maxPrice) {
    price += `@tpprixnum<${maxPrice}`;
  }

  // BEER TYPE / COLOUR
  // WINE TYPE / COLOUR (only french)
  // SPIRIT TYPE

  // Need a way to streamline all the various filter requirements into one query

  // beer - tpcouleur
  const beerTypes = types
    .filter(t => t.name === 'beer')
    .map(t => `@tpcouleur==${t.label}`)
    .join(';');
  if (beerTypes.length) {
    console.log(beerTypes);
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

export const postRequest = ({ query, options = {} }) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`
  };

  // Construct query
  let params = query;
  if (options.minPrice && options.maxPrice) {
    params += `&@tpprixnum>${options.minPrice};@tpprixnum<${options.maxPrice}`;
  } else if (options.minPrice) {
    params += `&@tpprixnum>${options.minPrice}`;
  } else if (options.maxPrice) {
    params += `&@tpprixnum<${options.maxPrice}`;
  }

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
