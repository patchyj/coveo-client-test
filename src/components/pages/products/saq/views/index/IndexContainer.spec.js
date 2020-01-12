/* eslint-disable react/prop-types */
import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import IndexContainer from './IndexContainer';

describe('IndexContainer', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      selectProduct: jest.fn(),
      results: [],
      loading: false
    };
  });

  it('should render', () => {
    const wrapper = shallow(
      <ThemeProvider theme={{ light: { color: 'yellow' } }}>
        <IndexContainer {...defaultProps} />
      </ThemeProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
