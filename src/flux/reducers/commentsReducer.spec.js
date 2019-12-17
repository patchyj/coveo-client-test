import commentsReducer from './commentsReducer';

describe('Comment Reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      comments: [],
      loading: false,
      errors: {}
    };
  });

  it('FETCH_COMMENTS_STARTED ', () => {
    const action = { type: 'FETCH_COMMENTS_STARTED' };

    const expectedState = {
      comments: [],
      errors: {},
      loading: true
    };

    const newState = commentsReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('FETCH_COMMENTS_SUCCESS ', () => {
    const action = {
      type: 'FETCH_COMMENTS_SUCCESS',
      payload: [{ body: 'some comment body' }]
    };

    const expectedState = {
      comments: [{ body: 'some comment body' }],
      errors: {},
      loading: false
    };

    const newState = commentsReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('FETCH_COMMENTS_FAILURE ', () => {
    const action = {
      type: 'FETCH_COMMENTS_FAILURE',
      errors: 'Error'
    };

    const expectedState = {
      comments: [],
      errors: 'Error',
      loading: false
    };

    const newState = commentsReducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });
});
