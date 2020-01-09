// eslint-disable-next-line object-curly-newline
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { rapidAPIRequest } from '../../utils/query';
import actionTypes from '../constants';

export function* getCatalogItems(action) {
  const { api, query } = action.payload;
  try {
    yield put({ type: actionTypes.GET_CATALOG_ITEMS_STARTED });
    const res = yield call(
      rapidAPIRequest,
      { query, api },
      { ...action.options }
    );

    if (res.status >= 200 && res.status < 300) {
      yield put({
        type: actionTypes.GET_CATALOG_ITEMS_SUCCESS,
        // res.data.results === gws || breweries
        payload: res.data.results || res.data
      });
    } else {
      throw res;
    }
  } catch (errors) {
    yield put({
      type: actionTypes.GET_CATALOG_ITEMS_FAILURE,
      errors
    });
  }
}

export function* selectCatalogProduct(action) {
  try {
    yield put({ type: actionTypes.SELECT_CATALOG_PRODUCT_STARTED });

    yield put({
      type: actionTypes.SELECT_CATALOG_PRODUCT_SUCCESS,
      payload: action.payload
    });
  } catch (errors) {
    yield put({
      type: actionTypes.SELECT_CATALOG_PRODUCT_FAILURE,
      errors
    });
  }
}

export default function* querySaga() {
  yield all([
    takeLatest(actionTypes.GET_CATALOG_ITEMS, getCatalogItems),
    takeLatest(actionTypes.SELECT_CATALOG_PRODUCT, selectCatalogProduct)
  ]);
}
