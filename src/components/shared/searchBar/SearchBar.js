import PropTypes from 'prop-types';
import React from 'react';
import S from '../../../static/styles';

const SearchBar = ({
  value,
  setValue,
  showPopover,
  closePopover,
  showSearchButton
}) => (
  <S.SearchBar showPopover={showPopover}>
    <div className="input-group input-inline">
      <input
        className="form-input"
        type="text"
        placeholder="search"
        value={value}
        onChange={setValue}
      />
      {showSearchButton && (
        <button className="btn btn-primary input-group-btn" type="submit">
          Search
        </button>
      )}
    </div>
    <div className="pop">
      <i className="fas fa-times" onClick={closePopover} role="presentation" />{' '}
      <small>Please enter a query</small>
    </div>
  </S.SearchBar>
);

SearchBar.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  showPopover: PropTypes.bool,
  closePopover: PropTypes.func,
  showSearchButton: PropTypes.bool
};

SearchBar.defaultProps = {
  value: '',
  setValue: () => {},
  showPopover: false,
  closePopover: () => {},
  showSearchButton: true
};

export default SearchBar;
