import React from 'react';
import { shallow } from 'enzyme';
import Wine from './Wine';

describe('Wine', () => {
  it('should render', () => {
    const props = {
      wine: 'Coveo Pinot Noir',
      country: 'Canada',
      regions: 'Quebec',
      vintage: '2020',
      wine_slug: 'very-good-wine',
      score: '100',
      confidence_index: 'A++',
      journalist_count: '1000',
      closeBanner: () => {}
    };
    const wrapper = shallow(<Wine {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
