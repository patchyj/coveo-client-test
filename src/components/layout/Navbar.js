import PropTypes from 'prop-types';
import React, { useEffect, useState, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { withTheme } from 'styled-components';
import Logo from '../../static/images/arrow.png';
import S from '../../static/styles';
import { dimensions } from '../../static/styles/utils/breakpoints';
import SearchBar from '../shared/searchBar/SearchBar';
import SearchResults from '../shared/searchBar/SearchResults';

export const shouldCollapse = (width, breakpoint) => width < breakpoint;

export const shouldSetResponsiveMode = (
  collapsed,
  responsive,
  setMode,
  setOpen
) => {
  if (collapsed && !responsive) setMode(true);

  if (!collapsed && responsive) {
    setOpen(false);
    if (responsive) setMode(false);
  }
};

const Navbar = ({
  fetchResultsFromNav,
  results,
  selectProduct,
  updateSuggested
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [responsiveMode, setResponsiveMode] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const { pathname } = useLocation();

  const { loading, navResults: searchResults } = results;
  const isRoot = pathname === '/';

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const clearInput = () => setQuery('');

  shouldSetResponsiveMode(
    shouldCollapse(windowWidth, dimensions.sm),
    responsiveMode,
    setResponsiveMode,
    setOpen
  );

  useEffect(() => {
    if (query.length) {
      fetchResultsFromNav({ query });
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [query]);

  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <S.Navbar className="navbar">
      <div className="container grid-lg">
        <div className="columns">
          <section className="column col-xs-4 navbar-section">
            {responsiveMode ? (
              <Fragment>
                <i
                  className={`fas fa-${isOpen ? 'times fadeIn' : 'bars'}`}
                  role="presentation"
                  onClick={() => setOpen(!isOpen)}
                />
              </Fragment>
            ) : (
              <Fragment>
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
              </Fragment>
            )}
          </section>
          {!isRoot && (
            <section className="column col-xs-8 navbar-section ">
              <SearchBar value={query} setValue={handleChange} />
              {showResults && (
                <SearchResults
                  loading={loading}
                  clearInput={clearInput}
                  searchResults={searchResults}
                  selectProduct={selectProduct}
                  setShowResults={setShowResults}
                  updateSuggested={updateSuggested}
                />
              )}
            </section>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="nav-dropdown container grid-lg">
          <div className="columns">
            <div className="column">
              <Link to="/" className="btn btn-link" onClick={handleClick}>
                Home
              </Link>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Link
                to="/catalog/breweries"
                className="btn btn-link"
                onClick={handleClick}
              >
                Breweries
              </Link>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Link
                to="/catalog/wines"
                className="btn btn-link"
                onClick={handleClick}
              >
                Wines
              </Link>
            </div>
          </div>
        </div>
      )}
    </S.Navbar>
  );
};

Navbar.propTypes = {
  results: PropTypes.shape({}),
  errors: PropTypes.shape({}),
  fetchResultsFromNav: PropTypes.func.isRequired,
  selectProduct: PropTypes.func,
  updateSuggested: PropTypes.func
};

Navbar.defaultProps = {
  results: {},
  errors: {},
  selectProduct: () => {},
  updateSuggested: () => {}
};

export default withTheme(Navbar);
