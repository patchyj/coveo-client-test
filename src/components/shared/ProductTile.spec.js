import React from 'react';
import { shallow } from 'enzyme';
import ProductTile from './ProductTile';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useRouteMatch: () => ({ url: '/test' })
}));

describe('ProductTile', () => {
  it('should render', () => {
    const props = {
      product: {},
      type: '',
      cols: null,
      selectProduct: () => {}
    };

    const wrapper = shallow(<ProductTile {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
