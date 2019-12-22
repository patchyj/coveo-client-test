import { all } from 'redux-saga/effects';
import catalogSaga from './sagas/catalogSaga';
import commentSaga from './sagas/commentSaga';
import querySaga from './sagas/querySaga';
import userSaga from './sagas/userSaga';

export default function* rootSaga() {
  yield all([querySaga(), userSaga(), commentSaga(), catalogSaga()]);
}
