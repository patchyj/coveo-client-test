import recordSaga from '../../utils/testUtils/recordSaga';
import { getRequest } from '../../utils/query';
import { fetchUsers } from './userSaga';
import actionTypes from '../constants';
import config from '../../../config';

jest.mock('../../utils/query');

describe('Fetch Users', () => {
  let gen;

  beforeEach(() => {
    getRequest.mockReset();
  });

  afterEach(() => {
    if (gen) expect(gen.next().done).toEqual(true);
  });

  it('Users: should test the getRequest for JSON placeholder API', async () => {
    const mockResponse = {
      status: 200,
      data: [{ id: '1', name: 'Tesy McTesterson' }]
    };

    getRequest.mockReturnValueOnce(mockResponse);

    const dispatched = await recordSaga(fetchUsers, {}, {});

    expect(getRequest).toHaveBeenCalledWith({
      url: config.JSON_PLACEHOLDER,
      endpoint: 'users'
    });

    expect(dispatched).toEqual([
      { type: actionTypes.FETCH_USERS_STARTED },
      {
        type: actionTypes.FETCH_USERS_SUCCESS,
        payload: [{ id: '1', name: 'Tesy McTesterson' }]
      }
    ]);
  });

  it('should throw an error if API call fails', async () => {
    const mockResponse = {
      status: 400,
      errors: 'Error'
    };

    getRequest.mockReturnValueOnce(mockResponse);

    const dispatched = await recordSaga(fetchUsers, {}, {});

    expect(dispatched).toEqual([
      { type: actionTypes.FETCH_USERS_STARTED },
      {
        type: actionTypes.FETCH_USERS_FAILURE,
        errors: {
          status: 400,
          errors: 'Error'
        }
      }
    ]);
  });
});
