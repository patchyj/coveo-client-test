import React from 'react';
import { shallow, mount } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import SearchResults from './SearchResults';

describe('SearchResults', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      searchResults: [],
      selectProduct: jest.fn(),
      loading: false
    };
  });

  it('should render and the items if present', () => {
    const props = {
      ...defaultProps,
      searchResults: [
        {
          title: 'Some title',
          raw: {
            tpprixnormal: 1.5,
            tpproductid: '123',
            tpformat: '330ml',
            tpcategorie: 'beer'
          },
          percentScore: 12.34
        }
      ]
    };
    const wrapper = shallow(<SearchResults {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render and empty container if searchResults is empty', () => {
    const wrapper = shallow(<SearchResults {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the spinner if loading', () => {
    const props = {
      ...defaultProps,
      loading: true
    };

    const wrapper = mount(<SearchResults {...props} />);

    expect(wrapper.find('svg')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger the selectProduct function when clicked', () => {
    const props = {
      ...defaultProps,
      searchResults: [
        {
          title: 'Some title',
          raw: {
            tpprixnormal: 1.5,
            tpproductid: '123',
            tpformat: '330ml',
            tpcategorie: 'beer'
          },
          percentScore: 12.34
        }
      ]
    };
    const wrapper = shallow(<SearchResults {...props} />);
    wrapper.find('Link').simulate('click');

    expect(props.selectProduct).toHaveBeenCalled();
    expect(props.selectProduct).toHaveBeenCalledWith({
      percentScore: 12.34,
      raw: {
        tpcategorie: 'beer',
        tpformat: '330ml',
        tpprixnormal: 1.5,
        tpproductid: '123'
      },
      title: 'Some title'
    });
  });
});
