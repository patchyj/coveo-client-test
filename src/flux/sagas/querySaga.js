// eslint-disable-next-line object-curly-newline
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { postRequest, httpGetRequest } from '../../utils/query';
import actionTypes from '../constants';

export function* fetchQuery(action) {
  try {
    yield put({ type: actionTypes.FETCH_QUERY_STARTED });
    // action.payload is an object
    const res = yield call(httpGetRequest, action.payload);

    if (res.status >= 200 && res.status < 300) {
      yield put({
        type: actionTypes.FETCH_QUERY_SUCCESS,
        payload: res.data.results
      });
    } else {
      throw res;
    }
  } catch (errors) {
    yield put({
      type: actionTypes.FETCH_QUERY_FAILURE,
      errors
    });
  }
}

export function* fetchQueryFromNav(action) {
  try {
    yield put({ type: actionTypes.FETCH_QUERY_FROM_NAV_STARTED });
    const res = yield call(postRequest, action.payload);
    if (res.status >= 200 && res.status < 300) {
      yield put({
        type: actionTypes.FETCH_QUERY_FROM_NAV_SUCCESS,
        payload: res.data.results
      });
    } else {
      throw res;
    }
  } catch (errors) {
    yield put({
      type: actionTypes.FETCH_QUERY_FROM_NAV_FAILURE,
      errors: errors.message
    });
  }
}

export function* selectProduct(action) {
  try {
    yield put({ type: actionTypes.SELECT_PRODUCT_STARTED });

    yield put({
      type: actionTypes.SELECT_PRODUCT_SUCCESS,
      payload: action.payload
    });
  } catch (errors) {
    yield put({
      type: actionTypes.SELECT_PRODUCT_FAILURE,
      errors
    });
  }
}

export default function* querySaga() {
  yield all([
    takeLatest(actionTypes.FETCH_QUERY, fetchQuery),
    takeLatest(actionTypes.FETCH_QUERY_FROM_NAV, fetchQueryFromNav),
    takeLatest(actionTypes.SELECT_PRODUCT, selectProduct)
  ]);
}
