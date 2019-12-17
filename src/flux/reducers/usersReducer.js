const initialState = {
  users: [],
  loading: false,
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_STARTED':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        loading: false,
        errors: action.errors
      };
    default:
      return state;
  }
};
