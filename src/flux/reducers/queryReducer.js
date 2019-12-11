const initialState = {
  results: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_QUERY_STARTED':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_QUERY_SUCCESS':
      return {
        ...state,
        results: action.payload,
        loading: false
      };
    case 'FETCH_QUERY_FAILURE':
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
