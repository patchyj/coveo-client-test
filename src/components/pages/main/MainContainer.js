import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import S from '../../../static/styles';
import { postRequest } from '../../../utils/query';
import ResultsList from './ResultsList';
import logo from '../../../static/images/saq-logo.png';
import Spinner from '../../shared/Spinner';

const MainContainer = ({ fetchResults, results, selectProduct }) => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const { loading, errors, results: searchResults } = results;

  const handleChange = (e) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    postRequest({ query });
  };

  return (
    <Fragment>
      <S.HeroContainer className="container">
        <img src={logo} alt="" />
        <form className="hero-body" onSubmit={handleSubmit}>
          <div className="input-group input-inline">
            <input
              className="form-input"
              type="text"
              placeholder="search"
              value={query}
              onChange={handleChange}
            />
            <button className="btn btn-primary input-group-btn" type="submit">
              Search
            </button>
          </div>
          <div className="lucky text-right">
            <small>I'm feeling lucky</small>
          </div>
          <div className="divider" />
          {loading && <Spinner />}
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
