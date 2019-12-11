import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import S from '../static/styles';
import { postRequest } from '../utils/query';
import ResultsList from './pages/ResultsList';

const HomePage = ({ fetchResults, results }) => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const { loading, results: searchResults } = results;

  const handleChange = (e) => {
    setQuery(e.target.value);
    fetchResults({ query: 'Bi%C3%A8re%20rousse' });

    if (query.length) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postRequest({ query: 'Bi%C3%A8re%20rousse' });
  };

  return (
    <Fragment>
      <S.HeroContainer className="container">
        <form className="hero-body" onSubmit={handleSubmit}>
          <div className="input-group input-inline">
            <input
              className="form-input"
              type="text"
              placeholder="search"
              value={query}
              onChange={handleChange}
            />
            <button className="btn btn-primary input-group-btn" type="submit">Search</button>
          </div>
          <div className="divider" />
          <small className="">Welcome to the SAQ search engine</small>
        </form>
      </S.HeroContainer>
      {showResults && (<ResultsList searchResults={searchResults} loading={loading} />)}
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
