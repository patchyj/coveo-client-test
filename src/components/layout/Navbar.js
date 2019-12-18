import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import S from '../../static/styles';
import Logo from '../../static/images/arrow.png';

const Navbar = () => {
  const { pathname } = useLocation();
  const isRoot = pathname === '/';
  return (
    <S.Navbar className="navbar container grid-lg">
      <section className="navbar-section">
        <Link to="/" className="navbar-brand mr-2">
          {' '}
          <img src={Logo} alt="logo" width="20" />{' '}
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
          <div className="input-group input-inline">
            <input className="form-input" type="text" placeholder="search" />
            <button className="btn btn-primary input-group-btn" type="button">
              Search
            </button>
          </div>
        </section>
      )}
    </S.Navbar>
  );
};

export default Navbar;
