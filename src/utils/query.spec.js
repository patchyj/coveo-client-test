import moxios from 'moxios';
import { getRequest, postRequest, rapidAPIRequest } from './query';
import config from '../../config';

describe('query', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('getRequest', () => {
    it('should return response with body', async () => {
      const response = {
        data: [{ id: '1', body: 'body' }]
      };

      moxios.stubRequest('http://test-url.com/comments', {
        status: 200,
        response
      });

      const promise = getRequest({
        url: 'http://test-url.com',
        endpoint: 'comments'
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
        Authorization: 'Bearer undefined'
      });
    });
  });

  describe('rapidAPIRequest: openBrewery', () => {
    it('should return response with body', async () => {
      const api = 'openBrewery';

      const response = {
        data: [{ id: '1', name: 'Brewery 1' }]
      };

      moxios.stubRequest(
        'https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search?query=comments',
        {
          status: 200,
          response
        }
      );

      const promise = await rapidAPIRequest({
        query: 'comments',
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
});
