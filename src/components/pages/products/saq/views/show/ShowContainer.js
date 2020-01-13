import PropTypes from 'prop-types';
import React from 'react';
import ProductBanner from '../../sections/ProductBanner';
import SuggestedList from '../../sections/SuggestedList';
import { ThemeType } from '../../../../../types';

const ShowContainer = ({ results, selected, selectProduct, theme }) => {
  const palette = theme.theme;
  return (
    <div>
      <ProductBanner selected={selected} />
      <SuggestedList
        results={results}
        selectProduct={selectProduct}
        title="Suggested results"
        palette={palette}
      />
    </div>
  );
};

ShowContainer.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
  selected: PropTypes.shape({}),
  selectProduct: PropTypes.func.isRequired,
  theme: ThemeType
};

ShowContainer.defaultProps = {
  results: [],
  selected: {},
  theme: {}
};

export default ShowContainer;
