/* eslint-disable react/prefer-stateless-function */
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import './root.scss';

export const theme = {
  light: {
    bg1: '#782c42',
    navBg: '#782c42',
    bodyBg: '#fff',
    cardBg: '#fff',
    mainText: '#140F12',
    cardText: '#782c42',
    heroText: '#782c42',
    panelBg: '#ddd',
    formBg: '#fff',
    active: '#5755d9'
  },
  dark: {
    bg1: '#2D2B35',
    navBg: '#2C2128',
    bodyBg: '#2D2B35',
    cardBg: '#3e3b40',
    mainText: '#c9c9c9',
    cardText: '#c9c9c9',
    heroText: '#c9c9c9',
    panelBg: '#212129',
    formBg: '#080808',
    active: '#e08231'
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
