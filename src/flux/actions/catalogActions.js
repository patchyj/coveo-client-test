import actionTypes from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const getCatalogItems = query => ({
  type: actionTypes.GET_CATALOG_ITEMS,
  payload: query
});
