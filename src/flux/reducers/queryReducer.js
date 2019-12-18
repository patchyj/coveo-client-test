const initialState = {
  results: [],
  navResults: [],
  selected: {},
  errors: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_QUERY_STARTED':
    case 'FETCH_QUERY_FROM_NAV_STARTED':
    case 'SELECT_PRODUCT_STARTED':
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
    case 'FETCH_QUERY_FROM_NAV_SUCCESS':
      return {
        ...state,
        navResults: action.payload,
        loading: false,
        errors: {}
      };
    case 'SELECT_PRODUCT_SUCCESS':
      return {
        ...state,
        selected: action.payload,
        loading: false,
        errors: {}
      };
    case 'FETCH_QUERY_FAILURE':
    case 'SELECT_PRODUCT_FAILURE':
    case 'FETCH_QUERY_FROM_NAV_FAILURE':
      return {
        ...state,
        loading: false,
        errors: action.errors
      };
    default:
      return state;
  }
};
