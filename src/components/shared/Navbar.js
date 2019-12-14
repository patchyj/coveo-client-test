import React from 'react';
import { Link } from 'react-router-dom';
import S from '../../static/styles';

const options = [
  { to: '/beers', query: 'beer' },
  { to: '/red-wine', query: 'red wine' },
  { to: '/red-wine', query: 'white wine' }
];

const Navbar = () => (
  <S.Navbar className="navbar container grid-lg">
    <section className="navbar-section">
      <div className="dropdown">
        <div className="btn-group">
          <a href="#" className="btn dropdown-toggle" tabIndex="0">
            <span className="mr-2">More</span>
            <i className="fas fa-caret-down" />
          </a>
          <ul className="menu">
            {options.map(option => (
              <li className="menu-item">
                <Link to={option.to}>{option.query}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    <section className="navbar-section">
      <div className="dropdown">
        <div className="btn-group">
          <a href="#" className="btn dropdown-toggle" tabIndex="0">
            <span className="mr-2">Basket</span>
            <i className="fas fa-shopping-basket mr-2" />
          </a>
          <ul className="menu">
            <li>
              <Link to="/account/trolley">
                <i className="fas fa-plus mr-2" />
                Add to cart
              </Link>
            </li>
            <li>
              <a href="">
                <i className="fas fa-minus mr-2" />
                Empty
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </S.Navbar>
);

export default Navbar;
