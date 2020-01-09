/* eslint-disable react/button-has-type */
import 'rc-slider/assets/index.css';
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import { withTheme } from 'styled-components';
import S from '../../../static/styles';

const { Range } = Slider;

const RangeSlider = ({ min, max, handleRange }) => (
  <S.RangeSlider className="container">
    <div className="columns">
      <small className="column col">Price Range</small>
    </div>
    <div className="columns">
      <div className="column col">
        <Range
          allowCross={false}
          defaultValue={[min, max]}
          onChange={handleRange}
          trackStyle={[{ backgroundColor: '#4240d4' }]}
          handleStyle={[
            { backgroundColor: 'white', borderColor: '#782c42' },
            { backgroundColor: 'white', borderColor: '#782c42' }
          ]}
          railStyle={{ backgroundColor: '#782c42' }}
        />
      </div>
    </div>
    <div className="columns">
      <small className="column col">${min}</small>
      <small className="column col text-right">${max}</small>
    </div>
  </S.RangeSlider>
);

RangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  handleRange: PropTypes.func
};

RangeSlider.defaultProps = {
  min: 0,
  max: 100,
  handleRange: () => {}
};

export default withTheme(RangeSlider);
