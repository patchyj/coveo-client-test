import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductsIndex from './IndexConnect';
import ProductsShow from './ShowContainer';

const ProductsContainer = ({ results, selected, selectProduct }) => {
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

ProductsContainer.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
  selected: PropTypes.shape({}),
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string
    })
  }),
  selectProduct: PropTypes.func.isRequired
};

ProductsContainer.defaultProps = {
  results: [],
  selected: {},
  match: {}
};

export default ProductsContainer;
