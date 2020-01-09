import actionTypes from '../constants';

export const getCatalogItems = ({ query, api, options }) => ({
  type: actionTypes.GET_CATALOG_ITEMS,
  payload: { query, api },
  options
});

export const selectCatalogProduct = selected => ({
  type: actionTypes.SELECT_CATALOG_PRODUCT,
  payload: selected
});

export const clearSelectedProduct = () => ({
  type: actionTypes.CLEAR_SELECTED_PRODUCT
});
