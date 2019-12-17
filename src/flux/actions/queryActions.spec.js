import * as actions from './queryActions';

describe('queryActionCreators', () => {
  it('fetchResults', () => {
    const fetchResults = actions.fetchResults('testQuery');

    expect(fetchResults).toEqual({
      type: 'FETCH_QUERY',
      payload: 'testQuery'
    });
  });

  it('selectProduct', () => {
    const selectProduct = actions.selectProduct({
      id: '1',
      name: 'product name'
    });

    expect(selectProduct).toEqual({
      type: 'SELECT_PRODUCT',
      payload: {
        id: '1',
        name: 'product name'
      }
    });
  });
});
