import actionTypes from '../constants';

export const fetchResults = query => ({
  type: actionTypes.FETCH_QUERY,
  payload: query
});

export const fetchResultsFromNav = query => ({
  type: actionTypes.FETCH_QUERY_FROM_NAV,
  payload: query
});

export const selectProduct = selected => ({
  type: actionTypes.SELECT_PRODUCT,
  payload: selected
});
