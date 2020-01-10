import React from 'react';
import SuggestedList from './sections/SuggestedList';

const ProductsIndex = ({ results, selectProduct }) => (
  <div>
    <SuggestedList results={results} selectProduct={selectProduct} />
  </div>
);

export default ProductsIndex;
