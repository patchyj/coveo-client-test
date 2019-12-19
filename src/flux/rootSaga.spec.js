import { all } from 'redux-saga/effects';
import rootSaga from './rootSaga';
import querySaga from './sagas/querySaga';
import userSaga from './sagas/userSaga';
import commentSaga from './sagas/commentSaga';
import catalogSaga from './sagas/catalogSaga';

describe('rootSaga', () => {
  it('should test the root saga', () => {
    const gen = rootSaga();

    expect(gen.next().value).toMatchObject(
      all([querySaga(), userSaga(), commentSaga(), catalogSaga()])
    );
  });
});
