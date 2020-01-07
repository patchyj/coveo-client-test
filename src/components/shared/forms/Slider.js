import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import S from '../../../static/styles';

const Slider = ({ value, setValue, name, label, min, max }) => (
  <S.Slider className="container">
    <div className="columns text-left">
      <small htmlFor={name} className="column col">
        {label}
      </small>
      <small className="column col text-right">${value}</small>
    </div>
    <input
      name={name}
      className="slider"
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={setValue}
    />
  </S.Slider>
);

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number
};

Slider.defaultProps = {
  setValue: () => {},
  name: '',
  label: '',
  min: 0,
  max: 100
};

export default withTheme(Slider);
