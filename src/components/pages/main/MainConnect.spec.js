import React from 'react';
import connectWrapper from '../../../utils/testUtils/connectWrapper';
import MainConnect from './MainConnect';

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
