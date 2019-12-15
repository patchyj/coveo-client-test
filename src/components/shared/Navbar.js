import React from 'react';
import { Link } from 'react-router-dom';
import S from '../../static/styles';
import createKey from '../../utils/createKey';

const options = [
  { to: 'beers', query: 'Beer' },
  { to: 'red-wine', query: 'Red wine' },
  { to: 'white-wine', query: 'White wine' }
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
            {options.map((option, i) => (
              <li className="menu-item" key={createKey(option.query, i)}>
                <Link to={`/catalog/${option.to}`}>{option.query}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </S.Navbar>
);

export default Navbar;
