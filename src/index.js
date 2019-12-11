import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import 'spectre.css';
import Root from './components/Root';

require('./favicon.ico');
// Tell webpack to load favicon.ico
const { persistor, store, history } = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} persistor={persistor} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} persistor={persistor} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
