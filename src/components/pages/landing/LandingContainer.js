import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import logo from '../../../static/images/saq-logo.png';
import S from '../../../static/styles';
import SearchBar from '../../shared/searchBar/SearchBar';
import Checkbox from '../../shared/forms/Checkbox';
import OptionsContainer from './sections/OptionsContainer';
import ResultsList from './sections/ResultsList';

const MainContainer = ({ fetchResults, results, selectProduct, history }) => {
  const [query, setQuery] = useState('');
  const [types, setTypes] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [autoSearch, setAutoSearch] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const { loading, errors, results: searchResults } = results;

  const options = {
    minPrice,
    maxPrice,
    types,
    numberOfResults: 50
  };

  /* <<<<<<< IF INPUT NOT EMPTY AND AUTO SEARCH ON, FETCH RESULTS >>>>>>> */
  useEffect(() => {
    if (query.length && autoSearch) {
      fetchResults({ query, options });
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [query]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  /* <<<<<<< FETCH RESULTS AND REDIRECT ON SUBMIT >>>>>>> */
  const handleSubmit = e => {
    e.preventDefault();
    if (query.length) {
      fetchResults({ query, options });
      history.push('/products');
    } else {
      setShowPopover(true);
    }
  };

  /* <<<<<<< ADVANCED OPTIONS: MIN AND MAX SLIDER VALUES >>>>>>> */
  const handleRange = val => {
    const [mn, mx] = val;
    setMinPrice(parseInt(mn, 10));
    setMaxPrice(parseInt(mx, 10));
  };

  /* <<<<<<< ADVANCED OPTIONS: TYPE OF ALCOHOL >>>>>>> */
  const handleTypes = optionTypes => {
    setTypes(optionTypes);
  };

  /* <<<<<<< SET AUTO SEARCH >>>>>>> */
  const handleCheckbox = () => {
    setAutoSearch(!autoSearch);
  };

  const closePopover = () => setShowPopover(false);

  return (
    <Fragment>
      <S.HeroContainer className="container">
        <img src={logo} alt="logo" />
        <form className="hero-body" onSubmit={handleSubmit}>
          <SearchBar
            value={query}
            setValue={handleChange}
            showPopover={showPopover}
            closePopover={closePopover}
          />
          <div className="autoSearchContainer">
            <Checkbox
              isChecked={autoSearch}
              setValue={handleCheckbox}
              label="auto search"
            />
          </div>
          <OptionsContainer
            minPrice={minPrice}
            maxPrice={maxPrice}
            handleRange={handleRange}
            handleTypes={handleTypes}
          />
          <div className="divider" />
          {errors && Object.keys(errors).length ? (
            <small className="">
              Oops! Something's gone wrong. Please check you have a valid API
              key and / or internet connection
            </small>
          ) : (
            ''
          )}
        </form>
      </S.HeroContainer>
      {showResults && (
        <ResultsList
          loading={loading}
          searchResults={searchResults}
          selectProduct={selectProduct}
        />
      )}
    </Fragment>
  );
};

MainContainer.propTypes = {
  results: PropTypes.shape({}),
  errors: PropTypes.shape({}),
  fetchResults: PropTypes.func.isRequired,
  selectProduct: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

MainContainer.defaultProps = {
  results: {},
  errors: {},
  selectProduct: () => {},
  history: {}
};

export default MainContainer;
