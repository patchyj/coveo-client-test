import queryReducer from './queryReducer';

describe('Query Reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      results: [],
      product: {},
      loading: false,
      errors: {}
    };
  });

  it('FETCH_QUERY_STARTED ', () => {
    const action = { type: 'FETCH_QUERY_STARTED' };

    const expectedState = {
      results: [],
      product: {},
      errors: {},
      loading: true
    };

    const newState = queryReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('FETCH_QUERY_SUCCESS ', () => {
    const action = {
      type: 'FETCH_QUERY_SUCCESS',
      payload: [{ id: '1', item: 'some result' }]
    };

    const expectedState = {
      results: [{ id: '1', item: 'some result' }],
      product: {},
      errors: {},
      loading: false
    };

    const newState = queryReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('FETCH_QUERY_FAILURE ', () => {
    const action = {
      type: 'FETCH_QUERY_FAILURE',
      errors: 'Error'
    };

    const expectedState = {
      results: [],
      product: {},
      errors: 'Error',
      loading: false
    };

    const newState = queryReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('SELECT_PRODUCT_STARTED ', () => {
    const action = { type: 'SELECT_PRODUCT_STARTED' };

    const expectedState = {
      results: [],
      product: {},
      errors: {},
      loading: true
    };

    const newState = queryReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('SELECT_PRODUCT_SUCCESS ', () => {
    const action = {
      type: 'SELECT_PRODUCT_SUCCESS',
      payload: { id: '1', item: 'some result' }
    };

    const expectedState = {
      results: [],
      product: { id: '1', item: 'some result' },
      errors: {},
      loading: false
    };

    const newState = queryReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('SELECT_PRODUCT_FAILURE ', () => {
    const action = {
      type: 'SELECT_PRODUCT_FAILURE',
      errors: 'Error'
    };

    const expectedState = {
      results: [],
      product: {},
      errors: 'Error',
      loading: false
    };

    const newState = queryReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });
});
