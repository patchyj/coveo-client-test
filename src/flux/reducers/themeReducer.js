const initialState = {
  theme: 'light',
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_THEME_STARTED':
      return {
        ...state,
        loading: true
      };
    case 'SWITCH_THEME_SUCCESS':
      return {
        ...state,
        theme: action.payload,
        loading: false
      };
    case 'SWITCH_THEME_FAILURE':
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
