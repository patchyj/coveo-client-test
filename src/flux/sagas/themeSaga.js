// eslint-disable-next-line object-curly-newline
import { all, put, takeLatest } from 'redux-saga/effects';
import actionTypes from '../constants';

export function* switchTheme(action) {
  yield put({ type: actionTypes.SWITCH_THEME_STARTED });
  try {
    yield put({
      type: actionTypes.SWITCH_THEME_SUCCESS,
      payload: action.payload
    });
  } catch (errors) {
    yield put({
      type: actionTypes.SWITCH_THEME_FAILURE,
      errors
    });
  }
}

export default function* querySaga() {
  yield all([takeLatest(actionTypes.SWITCH_THEME, switchTheme)]);
}
