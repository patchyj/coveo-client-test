/* eslint-disable react/prop-types */
import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import ShowContainer from './ShowContainer';

describe('ShowContainer', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      selectProduct: jest.fn(),
      results: [],
      selected: {}
    };
  });

  it('should render', () => {
    const wrapper = shallow(
      <ThemeProvider theme={{ light: { color: 'yellow' } }}>
        <ShowContainer {...defaultProps} />
      </ThemeProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
