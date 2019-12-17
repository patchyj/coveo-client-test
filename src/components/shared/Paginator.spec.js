import React from 'react';
import { shallow } from 'enzyme';
import Paginator from './Paginator';

describe('Paginator', () => {
  it('should render the Paginator', () => {
    const props = {
      total: 100,
      pageLimit: 10,
      setOffset: () => {},
      currentPage: 1,
      setCurrentPage: () => {}
    };

    const wrapper = shallow(<Paginator {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
