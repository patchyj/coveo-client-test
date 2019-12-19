import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';
import { routerWrapper } from '../../utils/testUtils/connectWrapper';

describe('Navbar', () => {
  let defaultProps;
  beforeAll(() => {
    defaultProps = {
      fetchResultsFromNav: jest.fn(),
      result: [],
      selectProduct: jest.fn()
    };
  });

  it('should render the Navbar', () => {
    const props = {
      ...defaultProps
    };

    const wrapper = shallow(routerWrapper(<Navbar {...props} />));

    expect(wrapper).toMatchSnapshot();
  });

  // TODO
  it('should show the results if query length !== 0', () => {});
  // TODO
  it('should not show the results if query length === 0', () => {});
  // TODO
  it('should hide the results once query length is 0 again', () => {});
  // TODO
  it('should not show the search bar if the root is "/"', () => {});
});
