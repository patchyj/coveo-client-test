const initialState = {
  products: [],
  product: {},
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATALOG_ITEMS_STARTED':
      return {
        ...state,
        loading: true
      };
    case 'GET_CATALOG_ITEMS_SUCCESS':
      return {
        ...state,
        products: action.payload,
        loading: false,
        errors: {}
      };
    case 'GET_CATALOG_ITEMS_FAILURE':
      return {
        ...state,
        loading: false,
        errors: action.errors
      };
    default:
      return state;
  }
};
