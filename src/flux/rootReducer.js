/* eslint-disable implicit-arrow-linebreak */
// Set up your root reducer here...
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import queryReducer from './reducers/queryReducer';
import usersReducer from './reducers/usersReducer';
import commentsReducer from './reducers/commentsReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    results: queryReducer,
    users: usersReducer,
    comments: commentsReducer
  });

export default rootReducer;
