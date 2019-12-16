/* eslint-disable object-curly-newline */
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CatalogIndex from './CatalogIndex';

function CatalogContainer({ getCatalogItems, products }) {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:type`}>
          <CatalogIndex fetch={getCatalogItems} products={products} />
        </Route>
      </Switch>
    </div>
  );
}

export default CatalogContainer;
