import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../../shared/forms/Checkbox';
import createKey from '../../../../utils/createKey';

const SubCategory = ({ header, options, setValue }) => {
  const checkboxes = options.map((option, i) => (
    <div className="column col-6" key={createKey(option.label, i)}>
      <Checkbox
        label={option.label}
        name={option.name}
        isChecked={option.isChecked}
        setValue={setValue}
        id={option.label}
      />
    </div>
  ));
  return (
    <div className="container">
      <div className="columns">{checkboxes}</div>
    </div>
  );
};

SubCategory.propTypes = {
  setValue: PropTypes.func,
  header: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({}))
};

SubCategory.defaultProps = {
  setValue: () => {},
  header: '',
  options: []
};

export default SubCategory;
