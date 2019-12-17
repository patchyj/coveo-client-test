const initialState = {
  results: [],
  selected: {},
  errors: {},
  loading: false
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
        loading: false,
        errors: {}
      };
    case 'FETCH_QUERY_FAILURE':
      return {
        ...state,
        loading: false,
        errors: action.errors
      };
    case 'SELECT_PRODUCT_STARTED':
      return {
        ...state,
        loading: true
      };
    case 'SELECT_PRODUCT_SUCCESS':
      return {
        ...state,
        selected: action.payload,
        loading: false,
        errors: {}
      };
    case 'SELECT_PRODUCT_FAILURE':
      return {
        ...state,
        loading: false,
        errors: action.errors
      };
    default:
      return state;
  }
};
