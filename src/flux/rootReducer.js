import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import queryReducer from './reducers/queryReducer';
import usersReducer from './reducers/usersReducer';
import commentsReducer from './reducers/commentsReducer';
import catalogReducer from './reducers/catalogReducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    results: queryReducer,
    users: usersReducer,
    comments: commentsReducer,
    catalog: catalogReducer
  });

export default rootReducer;
