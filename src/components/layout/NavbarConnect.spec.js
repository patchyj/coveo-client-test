import React from 'react';
import connectWrapper from '../../utils/testUtils/connectWrapper';
import NavbarConnect from './NavbarConnect';

describe('NavbarConnect', () => {
  it('should render with the store', () => {
    const initialState = {
      errors: {},
      results: {}
    };

    const wrapper = connectWrapper(initialState, <NavbarConnect />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should pass the results to the Navbar', () => {
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

  it('should map the dispatch functions to the Navbar component', () => {
    const initialState = {
      errors: {},
      results: {
        navResults: ['test']
      }
    };

    const wrapper = connectWrapper(initialState, <NavbarConnect />);
    const nav = wrapper.find('Navbar');

    expect(nav.prop('selectProduct')).toBeDefined();
    expect(nav.prop('fetchResultsFromNav')).toBeDefined();
    expect(nav.prop('updateSuggested')).toBeDefined();
  });
});
