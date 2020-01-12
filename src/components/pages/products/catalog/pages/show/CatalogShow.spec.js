/* eslint-disable react/prop-types */
import React from 'react';
import { shallow } from 'enzyme';
import CatalogShow from './CatalogShow';

jest.mock('react-router', () => ({
  useParams: jest.fn().mockReturnValue({ type: 'breweries' })
}));

describe('CatalogShow', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      closeBanner: jest.fn(),
      selected: {}
    };
  });

  it('should render', () => {
    const wrapper = shallow(<CatalogShow {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
