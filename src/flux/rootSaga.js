import { all } from 'redux-saga/effects';
import catalogSaga from './sagas/catalogSaga';
import querySaga from './sagas/querySaga';

export default function* rootSaga() {
  yield all([querySaga(), catalogSaga()]);
}
