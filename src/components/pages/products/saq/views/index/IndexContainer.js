import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SuggestedList from '../../sections/SuggestedList';
import S from '../../../../../../static/styles';

const ProductsIndex = ({ results, selectProduct, loading, theme }) => {
  const [cols, setCols] = useState(2);
  const palette = theme.theme;

  const renderContent = () => (
    <SuggestedList
      results={results}
      selectProduct={selectProduct}
      title="Results"
      cols={cols}
      truncate
      palette={palette}
    />
  );

  return (
    <div>
      <div className="container grid-lg">
        <S.OptionsPanel className="columns" palette={palette}>
          <div className="column col-6" />
          <div className="column col-6 text-right tile-size">
            <i
              className="fas fa-list"
              onClick={() => setCols(6)}
              role="presentation"
            />
            <i
              className="fas fa-th-large"
              onClick={() => setCols(2)}
              role="presentation"
            />
          </div>
        </S.OptionsPanel>
        {loading ? (
          <S.SpinnerContainer className="columns">
            <div className="loading loading-lg" />
          </S.SpinnerContainer>
        ) : (
          <div className="columns">{renderContent()}</div>
        )}
      </div>
    </div>
  );
};

ProductsIndex.propTypes = {
  selectProduct: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
  theme: PropTypes.shape({})
};

ProductsIndex.defaultProps = {
  results: [],
  loading: false,
  theme: {}
};

export default ProductsIndex;
