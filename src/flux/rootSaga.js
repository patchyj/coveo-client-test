import { all } from 'redux-saga/effects';
import catalogSaga from './sagas/catalogSaga';
import querySaga from './sagas/querySaga';
import themeSaga from './sagas/themeSaga';

export default function* rootSaga() {
  yield all([querySaga(), catalogSaga(), themeSaga()]);
}
