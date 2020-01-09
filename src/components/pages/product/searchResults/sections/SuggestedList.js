import PropTypes from 'prop-types';
import React from 'react';
import stringToKey from '../../../../../utils/createKey';
import ProductTile from '../../../../shared/ProductTile';

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
    <div className="container grid-lg">
      <div className="columns">
        <div className="column col-12">
          <div className="h4">Similar Results</div>
        </div>
        {tiles}
      </div>
    </div>
  );
};

SuggestedList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
  selectProduct: PropTypes.func
};

SuggestedList.defaultProps = {
  results: [],
  selectProduct: () => {}
};

export default SuggestedList;
