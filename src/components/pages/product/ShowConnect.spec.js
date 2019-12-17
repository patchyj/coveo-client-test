import React from 'react';
import ShowConnect from './ShowConnect';
import connectWrapper from '../../../utils/testUtils/connectWrapper';

describe('ShowConnect', () => {
  it('should render with the store', () => {
    const initialState = {
      results: {
        product: {}
      },
      users: {
        users: []
      },
      comments: {
        comments: []
      }
    };
    const wrapper = connectWrapper(initialState, <ShowConnect />);

    expect(wrapper).toMatchSnapshot();
  });
});
