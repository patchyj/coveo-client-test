import recordSaga from '../../utils/testUtils/recordSaga';
import { rapidAPIRequest } from '../../utils/query';
import { getCatalogItems } from './catalogSaga';
import actionTypes from '../constants';

jest.mock('../../utils/query');

describe('Catalog Items', () => {
  let gen;

  beforeEach(() => {
    rapidAPIRequest.mockReset();
  });

  afterEach(() => {
    if (gen) expect(gen.next().done).toEqual(true);
  });

  it('should test the Rapid API saga for GlobalWineScore', async () => {
    const action = {
      payload: {
        query: 'posh wines',
        api: 'gws'
      },
      options: {
        color: 'red'
      }
    };

    const mockResponse = {
      status: 200,
      data: {
        results: [{ wine_id: '1', wine: 'Some posh red wine' }]
      }
    };

    rapidAPIRequest.mockReturnValueOnce(mockResponse);

    const dispatched = await recordSaga(getCatalogItems, action, {});

    expect(rapidAPIRequest).toHaveBeenCalledWith(
      {
        query: 'posh wines',
        api: 'gws'
      },
      {
        color: 'red'
      }
    );

    expect(dispatched).toEqual([
      { type: actionTypes.GET_CATALOG_ITEMS_STARTED },
      {
        type: actionTypes.GET_CATALOG_ITEMS_SUCCESS,
        payload: [{ wine_id: '1', wine: 'Some posh red wine' }]
      }
    ]);
  });

  it('should test the Rapid API saga for Open Brewery', async () => {
    const action = {
      payload: {
        query: 'breweries',
        api: 'openBrewery'
      },
      options: {}
    };

    const mockResponse = {
      status: 200,
      data: [{ id: '1', name: 'New York Brewery' }]
    };

    rapidAPIRequest.mockReturnValueOnce(mockResponse);

    const dispatched = await recordSaga(getCatalogItems, action, {});

    expect(rapidAPIRequest).toHaveBeenCalledWith(
      {
        query: 'breweries',
        api: 'openBrewery'
      },
      {}
    );

    expect(dispatched).toEqual([
      { type: actionTypes.GET_CATALOG_ITEMS_STARTED },
      {
        type: actionTypes.GET_CATALOG_ITEMS_SUCCESS,
        payload: [{ id: '1', name: 'New York Brewery' }]
      }
    ]);
  });

  it('should throw an error if API call fails', async () => {
    const action = {
      payload: {},
      options: {}
    };

    const mockResponse = {
      status: 400,
      errors: 'Error'
    };

    rapidAPIRequest.mockReturnValueOnce(mockResponse);

    const dispatched = await recordSaga(getCatalogItems, action, {});

    expect(dispatched).toEqual([
      { type: actionTypes.GET_CATALOG_ITEMS_STARTED },
      {
        type: actionTypes.GET_CATALOG_ITEMS_FAILURE,
        errors: {
          status: 400,
          errors: 'Error'
        }
      }
    ]);
  });
});
