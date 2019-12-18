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
    <div className="columns">
      <div className="column col-12">
        <div className="h4">Similar Results</div>
      </div>
      {tiles}
    </div>
  );
};

SuggestedList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
  selectProduct: PropTypes.shape({}).isRequired
};

SuggestedList.defaultProps = {
  results: []
};

export default SuggestedList;
