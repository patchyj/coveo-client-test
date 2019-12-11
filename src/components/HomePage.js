import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import S from '../static/styles';
import { getRequest } from '../utils/query';
import Spinner from './shared/Spinner';

const HomePage = ({ fetchResults, results }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef();
  const { loading, results: searchResults } = results;

  const handleChange = async (e) => {
    setQuery(e.target.value);
    fetchResults({ query: 'Bi%C3%A8re%20rousse' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRequest({ query: 'Bi%C3%A8re%20rousse' });
  };

  return (
    <S.HeroContainer className="container">
      <form className="hero-body" onSubmit={handleSubmit}>
        <div className="input-group input-inline">
          <input
            className="form-input"
            type="text"
            placeholder="search"
            value={query}
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="btn btn-primary input-group-btn" type="submit">Search</button>
        </div>
        <div className="divider" />
        <small className="">Welcome to the SAQ search engine</small>
      </form>
      {loading && (<Spinner />)}

    </S.HeroContainer>
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
