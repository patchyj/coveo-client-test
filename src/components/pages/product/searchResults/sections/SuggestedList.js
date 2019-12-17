import React from 'react';
import PropTypes from 'prop-types';
import ProductTile from '../../../../shared/ProductTile';
import stringToKey from '../../../../../utils/createKey';

const SuggestedList = ({ results, selectProduct }) => {
  const tiles = results.map((result, i) => (
    <ProductTile
      product={result}
      type="generic"
      cols={3}
      key={stringToKey(result.title, i)}
      selectProduct={selectProduct}
    />
  ));

  return (
    <div className="container grid-md">
      <div className="h4">Similar Results</div>
      <div className="columns">{tiles}</div>
    </div>
  );
};

SuggestedList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({}))
};

SuggestedList.defaultProps = {
  results: []
};

export default SuggestedList;
