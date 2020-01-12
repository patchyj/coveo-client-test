import PropTypes from 'prop-types';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import S from '../../static/styles';
import { createItem, makeResponsiveColumns } from '../../utils/helpers';

const ProductTile = ({ product, type, cols, selectProduct, truncate }) => {
  const { url } = useRouteMatch();
  let item = {};
  if (product) {
    item = createItem(type, product, truncate);
  }

  const responsiveCols = makeResponsiveColumns(cols);

  const handleClick = () => selectProduct(product);

  const content = (
    <div className="card">
      <div className="card-header">
        <div className="card-title h6">{item.name}</div>
        <small className="card-subtitle">{item.location || item.price}</small>
      </div>
      {item.thumbnail && (
        <div className="card-body">
          <img src={item.thumbnail} alt="" />
        </div>
      )}
      {!item.thumbnail && (
        <div className="card-footer columns">
          <div className="column col">
            <small className="card-subtitle text-gray">{item.year}</small>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <S.Card className={`column ${responsiveCols}`}>
      {type === 'generic' ? (
        <div onClick={handleClick} role="presentation">
          {content}
        </div>
      ) : (
        <Link onClick={handleClick} to={`${url}/${item.id}`}>
          {content}
        </Link>
      )}
    </S.Card>
  );
};

ProductTile.propTypes = {
  product: PropTypes.shape({}).isRequired,
  type: PropTypes.string,
  cols: PropTypes.number,
  selectProduct: PropTypes.func,
  truncate: PropTypes.bool
};

ProductTile.defaultProps = {
  type: '',
  cols: 2,
  selectProduct: () => {},
  truncate: false
};

export default ProductTile;
