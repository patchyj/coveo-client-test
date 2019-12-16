// eslint-disable-next-line object-curly-newline
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getRequest } from '../../utils/query';
import actionTypes from '../constants';
import config from '../../../config';

export function* fetchComments() {
  try {
    yield put({ type: actionTypes.FETCH_COMMENTS_STARTED });
    const res = yield call(getRequest, {
      url: config.JSON_PLACEHOLDER,
      endpoint: 'comments'
    });

    if (res.status >= 200 && res.status < 300) {
      yield put({
        type: actionTypes.FETCH_COMMENTS_SUCCESS,
        payload: res.data
      });
    } else {
      throw res;
    }
  } catch (errors) {
    yield put({
      type: actionTypes.FETCH_COMMENTS_FAILURE,
      response: {
        errors
      }
    });
  }
}

export default function* querySaga() {
  yield all([takeLatest(actionTypes.FETCH_COMMENTS, fetchComments)]);
}
