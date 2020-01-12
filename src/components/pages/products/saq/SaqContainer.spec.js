/* eslint-disable react/prop-types */
import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import SaqContainer from './SaqContainer';

jest.mock('react-router', () => ({
  useRouteMatch: jest.fn().mockReturnValue({ path: '/catalog' }),
  withRouter: jest.fn()
}));

describe('SaqContainer', () => {
  it('should render', () => {
    const wrapper = shallow(
      <ThemeProvider theme={{ light: { color: 'yellow' } }}>
        <SaqContainer />
      </ThemeProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
