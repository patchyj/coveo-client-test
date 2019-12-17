import * as actions from './commentActions';

describe('Comment Action Creators', () => {
  it('fetchComments', () => {
    const fetchComments = actions.fetchComments();

    expect(fetchComments).toEqual({
      type: 'FETCH_COMMENTS'
    });
  });
});
