import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import MainConnect from './MainConnect';

const HOCWrapper = (component, props) => (
  <BrowserRouter {...props}>{component}</BrowserRouter>
);

describe('MainConnect', () => {
  it('should render', () => {
    const props = {
      children: [],
      
    };
    const wrapper = mount(HOCWrapper(MainConnect, props));

    // console.log(wrapper.debug());
    console.log(wrapper.props());
    // expect(wrapper).toMatchSnapshot();
  });
});
