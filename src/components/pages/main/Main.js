import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import S from '../../../static/styles';
import { postRequest } from '../../../utils/query';
import ResultsList from './ResultsList';
import logo from '../../../static/images/saq-logo.png';

const HomePage = ({ fetchResults, results }) => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const { loading, results: searchResults } = results;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    fetchResults({ query });
    if (query.length) {
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
          {/* <small className="">Welcome to the SAQ search engine</small> */}
        </form>
      </S.HeroContainer>
      {showResults && (
        <ResultsList searchResults={searchResults} loading={loading} />
      )}
    </Fragment>
  );
};

HomePage.propTypes = {
  results: PropTypes.shape({}),
  fetchResults: PropTypes.func.isRequired
};

HomePage.defaultProps = {
  results: {}
};

export default HomePage;
