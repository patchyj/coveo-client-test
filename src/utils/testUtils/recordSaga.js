import { runSaga } from 'redux-saga';

// help to record actions put by a saga generator function.
// that will help to not copy this dispatched logic everywhere
// from: https://dev.to/phil/the-best-way-to-test-redux-sagas-4hib
//
// saga official documentation also recommend to not test saga step by step,
// but more classically as a function in its entirety.
// https://redux-saga.js.org/docs/advanced/Testing.html
export default async (saga, initialAction, state = {}) => {
  const dispatched = [];

  await runSaga(
    {
      dispatch: action => dispatched.push(action),
      getState: () => state
    },
    saga,
    initialAction
  ).done;

  return dispatched;
};
