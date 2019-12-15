import { all } from 'redux-saga/effects';
import querySaga from './sagas/querySaga';
import userSaga from './sagas/userSaga';
import commentSaga from './sagas/commentSaga';
import catalogSaga from './sagas/catalogSaga';

export default function* rootSaga() {
  yield all([querySaga(), userSaga(), commentSaga(), catalogSaga()]);
}
