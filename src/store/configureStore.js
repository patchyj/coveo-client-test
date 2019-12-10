/* eslint-disable operator-linebreak */
/* eslint-disable no-multi-spaces */
import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from '../flux/rootReducer';
import rootSaga from '../flux/rootSaga';

// REDUX PERSIST
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage
};

function configureStoreProd(initialState) {
  const history = createBrowserHistory();
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Add other middleware on this line...
    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
    sagaMiddleware,
    reactRouterMiddleware
  ];

  const persistedReducer = persistReducer(persistConfig, rootReducer(history));

  const store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, history, persistor };
}

function configureStoreDev(initialState) {
  const history = createBrowserHistory();
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Add other middleware on this line...
    // Redux middleware that spits an error on you when you try to mutate your state
    // either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
    sagaMiddleware,
    reactRouterMiddleware
  ];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  const persistedReducer = persistReducer(persistConfig, rootReducer(history));

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../flux/rootReducer', () => {
      const nextReducer = require('../flux/rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer(history));
    });
  }

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, history, persistor };
}

const configureStore =
  process.env.NODE_ENV === 'production'
    ? configureStoreProd
    : configureStoreDev;

export default configureStore;
