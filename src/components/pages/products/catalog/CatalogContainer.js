/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CatalogIndex from './pages/index/CatalogIndex';

function CatalogContainer({
  getCatalogItems,
  selectProduct,
  products,
  selected,
  loading,
  clearSelectedProduct,
  theme
}) {
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
            selectProduct={selectProduct}
            products={products}
            selected={selected}
            loading={loading}
            clearSelectedProduct={clearSelectedProduct}
            theme={theme}
            palette={theme.theme}
          />
        </Route>
      </Switch>
    </div>
  );
}

CatalogContainer.propTypes = {
  getCatalogItems: PropTypes.func.isRequired,
  selectProduct: PropTypes.func.isRequired,
  clearSelectedProduct: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})),
  selected: PropTypes.shape({}),
  theme: PropTypes.shape({}),
  loading: PropTypes.bool
};

CatalogContainer.defaultProps = {
  products: [],
  selected: {},
  theme: {},
  loading: false
};

export default CatalogContainer;
