import React from 'react';
import { shallow } from 'enzyme';
import Brewery from './Brewery';

describe('Brewery', () => {
  it('should render', () => {
    const props = {
      name: 'Coveo Brewery',
      brewery_type: 'Micro',
      country: 'Canada',
      street: 'Canada Street',
      city: 'Montreal',
      state: 'Quebec',
      phone: '(123) 456-7890',
      website_url: 'www.coveo-brewery.com',
      longitude: '12345',
      latitude: '45678',
      closeBanner: () => {}
    };
    const wrapper = shallow(<Brewery {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
