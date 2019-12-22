import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import logo from '../../../static/images/saq-logo.png';
import S from '../../../static/styles';
import SearchBar from '../../shared/searchBar/SearchBar';
import ResultsList from './sections/ResultsList';

const MainContainer = ({ fetchResults, results, selectProduct }) => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const { loading, errors, results: searchResults } = results;

  const handleChange = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.length) {
      fetchResults({ query });
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    fetchResults({ query });
  };

  return (
    <Fragment>
      <S.HeroContainer className="container">
        <img src={logo} alt="" />
        <form className="hero-body" onSubmit={handleSubmit}>
          <SearchBar value={query} setValue={handleChange} />
          <div className="lucky text-right">
            <small>I'm feeling lucky</small>
          </div>
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
