import React from 'react';
import MainConnect from './MainConnect';
import connectWrapper from '../../../utils/testUtils/connectWrapper';

describe('MainConnect', () => {
  it('should render with the store', () => {
    const initialState = {
      results: {
        loading: false,
        errors: {},
        results: []
      }
    };
    const wrapper = connectWrapper(initialState, <MainConnect />);

    expect(wrapper).toMatchSnapshot();
  });
});
