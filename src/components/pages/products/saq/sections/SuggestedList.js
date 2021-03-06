import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import stringToKey from '../../../../../utils/createKey';
import ProductTile from '../../../../shared/ProductTile';

const SuggestedList = ({
  results,
  selectProduct,
  title,
  cols,
  truncate,
  palette
}) => {
  const tiles = results.map((result, i) => (
    <ProductTile
      product={result}
      cols={cols}
      key={stringToKey(result.title, i)}
      selectProduct={selectProduct}
      truncate={truncate}
      palette={palette}
    />
  ));

  return (
    <div className="container grid-lg">
      <div className="columns">
        <div className="column col-12">
          <div className="h4">{title}</div>
        </div>
        {tiles}
      </div>
    </div>
  );
};

SuggestedList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
  selectProduct: PropTypes.func,
  title: PropTypes.string,
  cols: PropTypes.number,
  truncate: PropTypes.bool,
  palette: PropTypes.string
};

SuggestedList.defaultProps = {
  results: [],
  selectProduct: () => {},
  title: '',
  cols: 3,
  truncate: false,
  palette: ''
};

export default withTheme(SuggestedList);
