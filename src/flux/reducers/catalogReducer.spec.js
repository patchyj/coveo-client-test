import catalogReducer from './catalogReducer';

describe('Catalog Reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      products: [],
      product: {},
      errors: {},
      loading: false
    };
  });

  it('GET_CATALOG_ITEMS_STARTED ', () => {
    const action = { type: 'GET_CATALOG_ITEMS_STARTED' };

    const expectedState = {
      products: [],
      product: {},
      errors: {},
      loading: true
    };

    const newState = catalogReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('GET_CATALOG_ITEMS_SUCCESS ', () => {
    const action = {
      type: 'GET_CATALOG_ITEMS_SUCCESS',
      payload: [{ message: 'success' }]
    };

    const expectedState = {
      products: [{ message: 'success' }],
      product: {},
      errors: {},
      loading: false
    };

    const newState = catalogReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('GET_CATALOG_ITEMS_FAILURE ', () => {
    const action = {
      type: 'GET_CATALOG_ITEMS_FAILURE',
      errors: 'Error'
    };

    const expectedState = {
      products: [],
      product: {},
      errors: 'Error',
      loading: false
    };

    const newState = catalogReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });
});
