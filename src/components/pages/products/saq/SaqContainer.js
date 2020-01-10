import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductsIndex from './views/index/IndexConnect';
import ProductsShow from './views/show/ShowConnect';

const ProductsContainer = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <ProductsIndex />
        </Route>
        <Route path={`${path}/:id`}>
          <ProductsShow />
        </Route>
      </Switch>
    </div>
  );
};

export default ProductsContainer;
