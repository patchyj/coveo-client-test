import moxios from 'moxios';
import { httpGetRequest, postRequest, rapidAPIRequest } from './query';
import config from '../../config';

describe('query', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('httpGetRequest', () => {
    it('should return response with body', async () => {
      const response = {
        data: [{ id: '1', body: 'body' }]
      };

      moxios.stubRequest(
        'https://cloudplatform.coveo.com/rest/search/v2?q=beer%3B@tpprixnum%3C10&numberOfResults=10',
        {
          status: 200,
          response
        }
      );

      const promise = httpGetRequest({
        query: 'beer',
        options: {
          minPrice: 0,
          maxPrice: 10,
          types: [],
          numberOfResults: 10
        }
      });

      const resolved = await Promise.resolve(promise);

      expect(resolved.data).toEqual({
        data: [
          {
            body: 'body',
            id: '1'
          }
        ]
      });
    });

    it('should return an error if rejected out of range 2xx', async () => {
      const response = {
        error: 'Error from the server'
      };

      moxios.stubRequest(
        'https://cloudplatform.coveo.com/rest/search/v2?q=beer%3B@tpprixnum%3C10&numberOfResults=10',
        {
          status: 300,
          response
        }
      );

      try {
        await httpGetRequest({
          query: 'beer',
          options: {
            minPrice: 0,
            maxPrice: 10,
            types: [],
            numberOfResults: 10
          }
        });
      } catch (error) {
        expect(error).toEqual(Error('Request failed with status code 300'));
        expect(error.response.data).toEqual(response);
      }
    });
  });

  describe('postRequest', () => {
    it('should return response with body', async () => {
      const response = {
        data: [{ id: '1', body: 'body' }]
      };

      moxios.stubRequest(config.URL, {
        status: 200,
        response
      });

      const promise = await postRequest({
        query: 'comments'
      });

      const resolved = await Promise.resolve(promise);

      expect(resolved.data).toEqual({
        data: [{ id: '1', body: 'body' }]
      });
      expect(resolved.config.headers).toEqual({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.TOKEN}`
      });
    });
  });

  describe('rapidAPIRequest: openBrewery', () => {
    it('should return response with body WITH QUERY', async () => {
      const api = 'openBrewery';

      const response = {
        data: [{ id: '1', name: 'Brewery 1' }]
      };

      moxios.stubRequest(
        'https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search?query=beer',
        {
          status: 200,
          response
        }
      );

      const promise = await rapidAPIRequest({
        query: 'beer',
        api,
        options: {}
      });

      const resolved = await Promise.resolve(promise);

      expect(resolved.data).toEqual({
        data: [{ id: '1', name: 'Brewery 1' }]
      });
      expect(resolved.config.headers).toEqual({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-rapidapi-host': config.rapidApi[api].HOST,
        'x-rapidapi-key': config.rapidApi.KEY
      });
    });
    it('should return response with body WITHOUT QUERY', async () => {
      const api = 'openBrewery';

      const response = {
        data: [{ id: '1', name: 'Brewery 1' }]
      };

      moxios.stubRequest(
        'https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search',
        {
          status: 200,
          response
        }
      );

      const promise = await rapidAPIRequest({
        query: '',
        api,
        options: {}
      });

      const resolved = await Promise.resolve(promise);

      expect(resolved.data).toEqual({
        data: [{ id: '1', name: 'Brewery 1' }]
      });
      expect(resolved.config.headers).toEqual({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-rapidapi-host': config.rapidApi[api].HOST,
        'x-rapidapi-key': config.rapidApi.KEY
      });
    });
  });

  describe('rapidAPIRequest: global wine score', () => {
    it('should return response with body', async () => {
      const api = 'gws';

      const response = {
        data: [{ wine_id: '1', wine: 'Wine 1' }]
      };

      moxios.stubRequest(
        'https://globalwinescore-global-wine-score-v1.p.rapidapi.com/globalwinescores/latest/',
        {
          status: 200,
          response
        }
      );

      const promise = await rapidAPIRequest({
        query: '',
        api,
        options: { color: 'red' }
      });

      const resolved = await Promise.resolve(promise);

      expect(resolved.data).toEqual({
        data: [{ wine_id: '1', wine: 'Wine 1' }]
      });
      expect(resolved.config.headers).toEqual({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-rapidapi-host': config.rapidApi[api].HOST,
        'x-rapidapi-key': config.rapidApi.KEY,
        authorization: `Token ${config.rapidApi[api].TOKEN}`
      });
    });
  });
});
