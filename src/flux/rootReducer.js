/* eslint-disable implicit-arrow-linebreak */
// Set up your root reducer here...
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import queryReducer from './reducers/queryReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    results: queryReducer
  });

export default rootReducer;
