import React from 'react';
import { Link } from 'react-router-dom';
import S from '../../static/styles';
import Logo from '../../static/images/arrow.png';

const Navbar = () => (
  <S.Navbar className="navbar container grid-lg">
    <section className="navbar-section">
      <Link to="/" className="navbar-brand mr-2">
        {' '}
        <img src={Logo} alt="logo" width="20" />{' '}
      </Link>
      <Link to="/catalog/beers" className="btn btn-link">
        Beers
      </Link>
      <Link to="/catalog/wines" className="btn btn-link">
        Wines
      </Link>
      <Link to="/catalog/spirits" className="btn btn-link">
        Spirits
      </Link>
    </section>
    <section className="navbar-section">
      <div className="input-group input-inline">
        <input className="form-input" type="text" placeholder="search" />
        <button className="btn btn-primary input-group-btn" type="button">
          Search
        </button>
      </div>
    </section>
  </S.Navbar>
);

export default Navbar;
