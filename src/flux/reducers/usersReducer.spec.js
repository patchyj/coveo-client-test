import usersReducer from './usersReducer';

describe('Users Reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      users: [],
      loading: false,
      errors: {}
    };
  });

  it('FETCH_USERS_STARTED ', () => {
    const action = { type: 'FETCH_USERS_STARTED' };

    const expectedState = {
      users: [],
      errors: {},
      loading: true
    };

    const newState = usersReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('FETCH_USERS_SUCCESS ', () => {
    const action = {
      type: 'FETCH_USERS_SUCCESS',
      payload: [{ id: '1', name: 'Testy McTesterson' }]
    };

    const expectedState = {
      users: [{ id: '1', name: 'Testy McTesterson' }],
      errors: {},
      loading: false
    };

    const newState = usersReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('FETCH_USERS_FAILURE ', () => {
    const action = {
      type: 'FETCH_USERS_FAILURE',
      errors: 'Error'
    };

    const expectedState = {
      users: [],
      errors: 'Error',
      loading: false
    };

    const newState = usersReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });
});
