import axios from 'axios';
import config from '../../config';

const { URL, TOKEN, rapidApi } = config;

export const httpGetRequest = ({ query, options }) => {
  const { minPrice, maxPrice, types, numberOfResults } = options;

  // CATEGORY
  let category = '';
  const beerCategories = types.filter(t => t.name === 'beer').map(t => t.alt);

  if (beerCategories.length) {
    category = `beer,(${beerCategories.join(',')}`;
  }

  const wineCategories = types.filter(t => t.name === 'wine').map(t => t.alt);

  if (wineCategories.length) {
    if (wineCategories.indexOf('mousseux') !== -1) {
      const sparklingColors = wineCategories.filter(w => w !== 'mousseux');
      category = `;@tpcategorie="vin mousseux"${
        sparklingColors.length
          ? `;@tpcouleur==(${sparklingColors.join(',')})`
          : ''
      }`;
    } else {
      category = `;@tpcategorie=vin;@tpcouleur==(${wineCategories.join(',')})`;
    }
  }

  // if spirit
  // color semi-important eg rum (rhum) is brown or white
  // const spiritCategories = types
  //   .filter(t => t.name === 'spirit')
  //   .map(t => t.alt);

  // if (spiritCategories.length) {
  //   console.log(`@tpcategorie=${spiritCategories.join(',')}`);
  // }

  // PRICE
  let price = '';
  if (minPrice && maxPrice) {
    price += `;@tpprixnum>${minPrice};@tpprixnum<${maxPrice}`;
  } else if (minPrice) {
    price += `;@tpprixnum>${minPrice}`;
  } else if (maxPrice) {
    price += `;@tpprixnum<${maxPrice}`;
  }

  return axios({
    method: 'GET',
    baseURL: URL,
    params: {
      access_token: TOKEN,
      q: `${query}${category}${price}`,
      numberOfResults
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
