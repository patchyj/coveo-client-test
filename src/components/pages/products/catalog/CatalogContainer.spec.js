/* eslint-disable react/prop-types */
import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import CatalogContainer from './CatalogContainer';

jest.mock('react-router', () => ({
  useRouteMatch: jest.fn().mockReturnValue({ path: '/catalog' }),
  withRouter: jest.fn()
}));

describe('CatalogContainer', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      getCatalogItems: jest.fn(),
      selectProduct: jest.fn(),
      products: [],
      selected: {},
      loading: false,
      clearSelectedProduct: jest.fn()
    };
  });

  it('should render', () => {
    const wrapper = shallow(
      <ThemeProvider theme={{ light: { color: 'yellow' } }}>
        <CatalogContainer {...defaultProps} />
      </ThemeProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
