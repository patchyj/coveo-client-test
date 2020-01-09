const initialState = {
  products: [],
  selected: {},
  errors: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATALOG_ITEMS_STARTED':
    case 'SELECT_CATALOG_PRODUCT_STARTED':
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
    case 'SELECT_CATALOG_PRODUCT_SUCCESS':
      return {
        ...state,
        selected: action.payload,
        loading: false,
        errors: {}
      };
    case 'CLEAR_SELECTED_PRODUCT':
      return {
        ...state,
        selected: {},
        loading: false,
        errors: {}
      };
    case 'GET_CATALOG_ITEMS_FAILURE':
    case 'SELECT_CATALOG_PRODUCT_FAILURE':
      return {
        ...state,
        loading: false,
        errors: action.errors
      };
    default:
      return state;
  }
};
