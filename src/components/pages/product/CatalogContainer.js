/* eslint-disable object-curly-newline */
import React from 'react';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import CatalogShow from './CatalogShow';

function CatalogContainer({ getCatalogItems, products }) {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <header className="navbar container grid-lg">
        <section className="navbar-section">
          <Link to={`${url}/beers`} className="btn btn-link">
            Beers
          </Link>
          <Link to={`${url}/red-wine`} className="btn btn-link">
            Red Wine
          </Link>
          <Link to={`${url}/white-wine`} className="btn btn-link">
            White wine
          </Link>
        </section>
        <section className="navbar-section">
          <div className="input-group input-inline">
            <input className="form-input" type="text" placeholder="search" />
            <button className="btn btn-primary input-group-btn">Search</button>
          </div>
        </section>
      </header>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:type`}>
          <CatalogShow fetch={getCatalogItems} products={products} />
        </Route>
      </Switch>
    </div>
  );
}

export default CatalogContainer;
