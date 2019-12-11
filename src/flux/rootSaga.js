import { all } from 'redux-saga/effects';
import querySaga from './sagas/querySaga';

export default function* rootSaga() {
  yield all([querySaga()]);
}
