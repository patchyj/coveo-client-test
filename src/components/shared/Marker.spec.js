import React from 'react';
import { shallow } from 'enzyme';
import Marker from './Marker';

describe('Marker', () => {
  it('should render', () => {
    const wrapper = shallow(<Marker />);
    expect(wrapper).toMatchSnapshot();
  });
});
