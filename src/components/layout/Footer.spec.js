import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';

describe('Footer', () => {
  it('should render the Footer', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toMatchSnapshot();
  });
});
