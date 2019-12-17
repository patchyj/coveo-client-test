import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, Link } from 'react-router-dom';
import S from '../../static/styles';
import { createItem, makeResponsiveColumns } from '../../utils/helpers';

const ProductTile = ({ product, type, cols, selectProduct }) => {
  const { url } = useRouteMatch();
  let item = {};
  if (product) {
    item = createItem(type, product);
  }

  const responsiveCols = makeResponsiveColumns(cols);

  const content = (
    <div className="card" style={{ height: '13rem', margin: '1rem 0' }}>
      <div className="card-header">
        <div className="card-title h6">{item.name}</div>
        <small className="card-subtitle">{item.location || item.score}</small>
      </div>
      <div className="card-body" />
      <div className="card-footer columns">
        <div className="column col">
          <small className="card-subtitle text-gray">{item.year}</small>
        </div>
      </div>
    </div>
  );

  return (
    <S.Card className={`column ${responsiveCols}`}>
      {type === 'generic' ? (
        <div onClick={() => selectProduct(product)} role="presentation">
          {content}
        </div>
      ) : (
        <Link to={`${url}/${item.id}`}>{content}</Link>
      )}
    </S.Card>
  );
};

ProductTile.propTypes = {
  product: PropTypes.shape({}),
  type: PropTypes.string,
  cols: PropTypes.number
};

ProductTile.defaultProps = {
  product: {},
  type: '',
  cols: 2
};

export default ProductTile;
