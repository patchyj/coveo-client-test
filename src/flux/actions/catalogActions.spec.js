import * as actions from './catalogActions';

describe('authActionCreators', () => {
  it('getCatalogItems', () => {
    const getCatalogItems = actions.getCatalogItems({
      query: 'testQuery',
      api: 'test',
      options: { 'some-header': 'header property' }
    });

    expect(getCatalogItems).toEqual({
      type: 'GET_CATALOG_ITEMS',
      payload: { query: 'testQuery', api: 'test' },
      options: { 'some-header': 'header property' }
    });
  });
});
