/* eslint-disable react/prefer-stateless-function */
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import './root.scss';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired
};
