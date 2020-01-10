import React from 'react';
import connectWrapper from '../../../utils/testUtils/connectWrapper';
import LandingConnect from './LandingConnect';

describe('LandingConnect', () => {
  it('should render with the store', () => {
    const initialState = {
      results: {
        loading: false,
        errors: {},
        results: []
      }
    };
    const wrapper = connectWrapper(initialState, <LandingConnect />);

    expect(wrapper).toMatchSnapshot();
  });
});
