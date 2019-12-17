import recordSaga from '../../utils/testUtils/recordSaga';
import { postRequest } from '../../utils/query';
import { fetchQuery, selectProduct } from './querySaga';
import actionTypes from '../constants';

jest.mock('../../utils/query');

describe('Main Search Query', () => {
  let gen;

  beforeEach(() => {
    postRequest.mockReset();
  });

  afterEach(() => {
    if (gen) expect(gen.next().done).toEqual(true);
  });

  describe('fetchQuery', () => {
    it('should return SUCCESS if postRequest with query if successful', async () => {
      const action = {
        payload: 'white wine'
      };
      const mockResponse = {
        status: 200,
        data: {
          results: [
            { id: '1', name: 'Some white wine' },
            { id: '2', name: 'Some rose wine' }
          ]
        }
      };

      postRequest.mockReturnValueOnce(mockResponse);

      const dispatched = await recordSaga(fetchQuery, action, {});

      expect(postRequest).toHaveBeenCalledWith('white wine');

      expect(dispatched).toEqual([
        { type: actionTypes.FETCH_QUERY_STARTED },
        {
          type: actionTypes.FETCH_QUERY_SUCCESS,
          payload: [
            { id: '1', name: 'Some white wine' },
            { id: '2', name: 'Some rose wine' }
          ]
        }
      ]);
    });

    it('should return FAILURE if postRequest with query fails', async () => {
      const action = {
        payload: 'white wine'
      };
      const mockResponse = {
        status: 400,
        errors: 'Error'
      };

      postRequest.mockReturnValueOnce(mockResponse);

      const dispatched = await recordSaga(fetchQuery, action, {});

      expect(postRequest).toHaveBeenCalledWith('white wine');

      expect(dispatched).toEqual([
        { type: actionTypes.FETCH_QUERY_STARTED },
        {
          type: actionTypes.FETCH_QUERY_FAILURE,
          errors: {
            status: 400,
            errors: 'Error'
          }
        }
      ]);
    });
  });

  describe('selectProduct', () => {
    it('should return SUCCESS if postRequest with query if successful', async () => {
      const action = {
        payload: { id: '1', name: 'Some product' }
      };

      const dispatched = await recordSaga(selectProduct, action, {});

      expect(dispatched).toEqual([
        { type: actionTypes.SELECT_PRODUCT_STARTED },
        {
          type: actionTypes.SELECT_PRODUCT_SUCCESS,
          payload: { id: '1', name: 'Some product' }
        }
      ]);
    });
  });
});
