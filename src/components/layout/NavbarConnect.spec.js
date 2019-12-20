import React from 'react';
import NavbarConnect from './NavbarConnect';
import connectWrapper from '../../utils/testUtils/connectWrapper';

describe('NavbarConnect', () => {
  it('should render with the store', () => {
    const initialState = {
      errors: {},
      results: {}
    };

    const wrapper = connectWrapper(initialState, <NavbarConnect />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should pass the products to the Navbar', () => {
    const initialState = {
      errors: {},
      results: {
        navResults: ['test']
      }
    };

    const wrapper = connectWrapper(initialState, <NavbarConnect />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Navbar').prop('results')).toEqual({
      navResults: ['test']
    });
  });
});
