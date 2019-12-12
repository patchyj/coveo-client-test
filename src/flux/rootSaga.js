import { all } from 'redux-saga/effects';
import querySaga from './sagas/querySaga';
import userSaga from './sagas/userSaga';
import commentSaga from './sagas/commentSaga';

export default function* rootSaga() {
  yield all([querySaga(), userSaga(), commentSaga()]);
}
