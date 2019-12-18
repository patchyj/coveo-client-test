import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ value, setValue }) => (
  <section>
    <div className="input-group input-inline">
      <input
        className="form-input"
        type="text"
        placeholder="search"
        value={value}
        onChange={setValue}
      />
      <button className="btn btn-primary input-group-btn" type="submit">
        Search
      </button>
    </div>
  </section>
);

SearchBar.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func
};

SearchBar.defaultProps = {
  value: '',
  setValue: () => {}
};

export default SearchBar;
