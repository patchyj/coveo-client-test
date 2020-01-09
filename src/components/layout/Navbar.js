import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { withTheme } from 'styled-components';
import Logo from '../../static/images/arrow.png';
import S from '../../static/styles';
import SearchBar from '../shared/searchBar/SearchBar';
import SearchResults from '../shared/searchBar/SearchResults';

const Navbar = ({ fetchResultsFromNav, results, selectProduct }) => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const { pathname } = useLocation();

  const { loading, navResults: searchResults } = results;
  const isRoot = pathname === '/';

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const clearInput = () => setQuery('');

  useEffect(() => {
    if (query.length) {
      fetchResultsFromNav({ query });
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [query]);

  return (
    <S.Navbar className="navbar container ">
      <div className="container grid-lg">
        <div className="columns">
          <section className="navbar-section">
            <Link to="/" className="navbar-brand mr-2">
              {' '}
              <img src={Logo} alt="logo" />{' '}
            </Link>
            <Link to="/catalog/breweries" className="btn btn-link">
              Breweries
            </Link>
            <Link to="/catalog/wines" className="btn btn-link">
              Wines
            </Link>
          </section>
          {!isRoot && (
            <section className="navbar-section">
              <SearchBar value={query} setValue={handleChange} />
              {showResults && (
                <SearchResults
                  searchResults={searchResults}
                  loading={loading}
                  selectProduct={selectProduct}
                  setShowResults={setShowResults}
                  clearInput={clearInput}
                />
              )}
            </section>
          )}
        </div>
      </div>
    </S.Navbar>
  );
};

Navbar.propTypes = {
  results: PropTypes.shape({}),
  errors: PropTypes.shape({}),
  fetchResultsFromNav: PropTypes.func.isRequired,
  selectProduct: PropTypes.func
};

Navbar.defaultProps = {
  results: {},
  errors: {},
  selectProduct: () => {}
};

export default withTheme(Navbar);
