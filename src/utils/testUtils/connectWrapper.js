import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export default (initialState, component) => {
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );

  return wrapper;
};
