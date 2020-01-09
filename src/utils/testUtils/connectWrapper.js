import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { theme } from '../../components/Root';

export const routerWrapper = component => (
  <BrowserRouter>{component}</BrowserRouter>
);

export default (initialState, component) => {
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Provider store={store}>{routerWrapper(component)}</Provider>
    </ThemeProvider>
  );

  return wrapper;
};
