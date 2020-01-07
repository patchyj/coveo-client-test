/* eslint-disable react/prefer-stateless-function */
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import './root.scss';

const theme = {
  light: {
    color1: '#782c42'
  }
};

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>
      </ThemeProvider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired
};
