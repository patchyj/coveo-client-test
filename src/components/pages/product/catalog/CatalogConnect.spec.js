import React from 'react';
import connectWrapper from '../../../../utils/testUtils/connectWrapper';
import CatalogConnect from './CatalogConnect';

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
