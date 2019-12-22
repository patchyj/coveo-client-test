import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      fetchResultsFromNav: jest.fn(),
      results: {},
      selectProduct: jest.fn()
    };
  });

  it('should render the Navbar', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Navbar {...defaultProps} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should not show the search bar if the root is "/"', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/blah']}>
        <Navbar {...defaultProps} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should show the results if query length !== 0', () => {
    // ASSEMBLE
    const { container } = render(
      <MemoryRouter initialEntries={['/blah']}>
        <Navbar {...defaultProps} />
      </MemoryRouter>
    );

    const input = container.querySelector('input');

    // ACT
    expect(container.getElementsByClassName('results').length).toBe(0);

    fireEvent.change(input, {
      target: { value: 'beer' }
    });

    // ASSERT
    expect(defaultProps.fetchResultsFromNav).toHaveBeenCalledWith({
      query: 'beer'
    });
    expect(container.getElementsByClassName('results')[0]).toBeInTheDocument();
  });

  it('should not show the results if query length === 0', () => {
    // ASSEMBLE
    const { container } = render(
      <MemoryRouter initialEntries={['/blah']}>
        <Navbar {...defaultProps} />
      </MemoryRouter>
    );

    expect(container.getElementsByClassName('results').length).toBe(0);
  });

  it('should hide the results once query length is 0 again', () => {
    // ASSEMBLE
    const { container } = render(
      <MemoryRouter initialEntries={['/blah']}>
        <Navbar {...defaultProps} />
      </MemoryRouter>
    );

    const input = container.querySelector('input');

    // ACT
    fireEvent.change(input, {
      target: { value: 'beer' }
    });
    expect(container.getElementsByClassName('results')[0]).toBeInTheDocument();

    fireEvent.change(input, {
      target: { value: '' }
    });
    expect(container.getElementsByClassName('results').length).toBe(0);
  });
});
