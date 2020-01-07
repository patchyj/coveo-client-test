import React from 'react';
import connectWrapper from '../../../../utils/testUtils/connectWrapper';
import ShowConnect from './ShowConnect';

describe('ShowConnect', () => {
  it('should render with the store', () => {
    const initialState = {
      results: {
        product: {}
      }
    };
    const wrapper = connectWrapper(initialState, <ShowConnect />);

    expect(wrapper).toMatchSnapshot();
  });
});
