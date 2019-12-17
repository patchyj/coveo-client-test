import recordSaga from '../../utils/testUtils/recordSaga';
import { getRequest } from '../../utils/query';
import { fetchComments } from './commentSaga';
import actionTypes from '../constants';
import config from '../../../config';

jest.mock('../../utils/query');

describe('Fetch Comments', () => {
  let gen;

  beforeEach(() => {
    getRequest.mockReset();
  });

  afterEach(() => {
    if (gen) expect(gen.next().done).toEqual(true);
  });

  it('Comments: should test the getRequest for JSON placeholder API', async () => {
    const mockResponse = {
      status: 200,
      data: [{ id: '1', body: 'Body 1' }]
    };

    getRequest.mockReturnValueOnce(mockResponse);

    const dispatched = await recordSaga(fetchComments, {}, {});

    expect(getRequest).toHaveBeenCalledWith({
      url: config.JSON_PLACEHOLDER,
      endpoint: 'comments'
    });

    expect(dispatched).toEqual([
      { type: actionTypes.FETCH_COMMENTS_STARTED },
      {
        type: actionTypes.FETCH_COMMENTS_SUCCESS,
        payload: [{ id: '1', body: 'Body 1' }]
      }
    ]);
  });

  it('should throw an error if API call fails', async () => {
    const mockResponse = {
      status: 400,
      errors: 'Error'
    };

    getRequest.mockReturnValueOnce(mockResponse);

    const dispatched = await recordSaga(fetchComments, {}, {});

    expect(dispatched).toEqual([
      { type: actionTypes.FETCH_COMMENTS_STARTED },
      {
        type: actionTypes.FETCH_COMMENTS_FAILURE,
        errors: {
          status: 400,
          errors: 'Error'
        }
      }
    ]);
  });
});
