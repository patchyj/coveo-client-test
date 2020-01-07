import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import S from '../../../static/styles';

const Checkbox = ({ label, name, isChecked, setValue, id }) => (
  <S.Checkbox className="form-checkbox form-inline">
    <input
      type="checkbox"
      name={name}
      onChange={setValue}
      checked={isChecked}
      id={id}
    />
    <i className="form-icon" />
    <small>{label}</small>
  </S.Checkbox>
);

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  setValue: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string
};

Checkbox.defaultProps = {
  isChecked: false,
  setValue: () => {},
  name: '',
  label: '',
  id: ''
};

export default withTheme(Checkbox);
