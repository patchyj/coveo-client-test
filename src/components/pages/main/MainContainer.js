import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import logo from '../../../static/images/saq-logo.png';
import S from '../../../static/styles';
import SearchBar from '../../shared/searchBar/SearchBar';
import OptionsContainer from './sections/OptionsContainer';
import ResultsList from './sections/ResultsList';

const MainContainer = ({ fetchResults, results, selectProduct }) => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const { loading, errors, results: searchResults } = results;

  const options = {
    minPrice,
    maxPrice
  };

  useEffect(() => {
    if (query.length) {
      fetchResults({ query, options });
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [query]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchResults({ query });
  };

  const handleSlider = e => {
    if (e.target.name === 'minPrice') setMinPrice(parseInt(e.target.value, 10));
    if (e.target.name === 'maxPrice') setMaxPrice(parseInt(e.target.value, 10));
  };

  const handleCheckbox = e => {
    console.log(e);
  };

  return (
    <Fragment>
      <S.HeroContainer className="container">
        <img src={logo} alt="" />
        <form className="hero-body" onSubmit={handleSubmit}>
          <SearchBar value={query} setValue={handleChange} />
          <OptionsContainer
            minPrice={minPrice}
            maxPrice={maxPrice}
            handleSlider={handleSlider}
            handleCheckbox={handleCheckbox}
          />
          <div className="divider" />
          {errors && Object.keys(errors).length ? (
            <small className="">Oops! Something's gone wrong!!</small>
          ) : (
            ''
          )}
        </form>
      </S.HeroContainer>
      {showResults && (
        <ResultsList
          searchResults={searchResults}
          loading={loading}
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
  selectProduct: PropTypes.func
};

MainContainer.defaultProps = {
  results: {},
  errors: {},
  selectProduct: () => {}
};

export default MainContainer;
