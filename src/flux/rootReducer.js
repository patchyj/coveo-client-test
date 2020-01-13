import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import queryReducer from './reducers/queryReducer';
import catalogReducer from './reducers/catalogReducer';
import themeReducer from './reducers/themeReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    results: queryReducer,
    catalog: catalogReducer,
    theme: themeReducer
  });

export default rootReducer;
