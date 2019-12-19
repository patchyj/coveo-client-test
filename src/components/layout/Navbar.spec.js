import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';
import { routerWrapper } from '../../utils/testUtils/connectWrapper';

describe('Navbar', () => {
  it('should render the Navbar', () => {
    const props = { fetchResultsFromNav: jest.fn() };
    const wrapper = shallow(routerWrapper(<Navbar {...props} />));

    expect(wrapper).toMatchSnapshot();
  });
});
