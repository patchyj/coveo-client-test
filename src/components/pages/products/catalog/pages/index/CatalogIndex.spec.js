/* eslint-disable react/prop-types */
import React from 'react';
import { shallow } from 'enzyme';
import CatalogIndex from './CatalogIndex';

jest.mock('react-router', () => ({
  useParams: jest.fn().mockReturnValue({ type: 'breweries' }),
  withRouter: jest.fn()
}));

describe('CatalogIndex', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      clearSelectedProduct: jest.fn(),
      fetch: jest.fn(),
      loading: false,
      products: [],
      selected: {},
      selectProduct: jest.fn()
    };
  });

  it('should render', () => {
    const wrapper = shallow(<CatalogIndex {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
