const initialState = {
  comments: [],
  loading: false,
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COMMENTS_STARTED':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_COMMENTS_SUCCESS':
      return {
        ...state,
        comments: action.payload,
        loading: false
      };
    case 'FETCH_COMMENTS_FAILURE':
      return {
        ...state,
        loading: false,
        errors: action.errors
      };
    default:
      return state;
  }
};
