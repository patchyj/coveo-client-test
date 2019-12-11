import {
  all, call, put, takeLatest
} from 'redux-saga/effects';
import { getRequest } from '../../utils/query';
import actionTypes from '../constants';

export function* fetchQuery(action) {
  try {
    yield put({ type: actionTypes.FETCH_QUERY_STARTED });
    const res = yield call(getRequest, action.payload);

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
      response: {
        errors
      }
    });
  }
}


export default function* querySaga() {
  yield all([
    takeLatest(actionTypes.FETCH_QUERY, fetchQuery)
  ]);
}
