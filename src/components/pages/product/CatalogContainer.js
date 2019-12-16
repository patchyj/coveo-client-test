/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CatalogIndex from './CatalogIndex';

function CatalogContainer({ getCatalogItems, products, loading }) {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:type`}>
          <CatalogIndex
            fetch={getCatalogItems}
            products={products}
            loading={loading}
          />
        </Route>
      </Switch>
    </div>
  );
}

CatalogContainer.propTypes = {
  getCatalogItems: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool
};

CatalogContainer.defaultProps = {
  products: [],
  loading: false
};

export default CatalogContainer;
