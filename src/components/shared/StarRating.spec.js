import React from 'react';
import { shallow } from 'enzyme';
import StarRating from './StarRating';

describe('StarRating', () => {
  it('should render the StarRating', () => {
    const props = {
      percentScore: 84
    };
    const wrapper = shallow(<StarRating {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
