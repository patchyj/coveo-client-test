import * as actions from './userActions';

describe('userActionCreators', () => {
  it('fetchUsers', () => {
    const fetchUsers = actions.fetchUsers();

    expect(fetchUsers).toEqual({
      type: 'FETCH_USERS'
    });
  });
});
