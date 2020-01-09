import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import createKey from '../../../utils/createKey';

const Radio = ({ options, currentChecked, name, onChange, title }) => {
  const buttons = options.map((option, i) => {
    const current = currentChecked === option.label;
    return (
      <Fragment key={createKey(option.label, i)}>
        <label className="form-radio form-inline">
          <input
            id={option.label}
            type="radio"
            name={name}
            checked={current}
            onChange={onChange}
          />
          <i className="form-icon" />
          <small>{option.label}</small>
        </label>
      </Fragment>
    );
  });

  return (
    <div className="form-group">
      <label className="form-label">{title}</label>
      {buttons}
    </div>
  );
};

Radio.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})),
  currentChecked: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  title: PropTypes.string
};

Radio.defaultProps = {
  options: [],
  currentChecked: '',
  onChange: () => {},
  name: '',
  title: ''
};

export default Radio;
