import React from 'react';
import CatalogConnect from './CatalogConnect';
import connectWrapper from '../../../utils/testUtils/connectWrapper';

describe('CatalogConnect', () => {
  it('should render with the store', () => {
    const initialState = {
      catalog: {
        products: [],
        loading: false
      }
    };
    const wrapper = connectWrapper(initialState, <CatalogConnect />);

    expect(wrapper).toMatchSnapshot();
  });
});
