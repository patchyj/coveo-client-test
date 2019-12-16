import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, Link } from 'react-router-dom';
import S from '../../../static/styles';

const ProductTile = ({ product, type, cols }) => {
  const { url } = useRouteMatch();
  let item = {};
  if (product) {
    switch (type) {
      case 'beers':
        item = {
          id: product.id,
          name: product.name,
          location: `${product.city}, ${product.state}`,
          year: '',
          url: product.website_url
        };
        break;
      case 'wines':
        item = {
          id: product.wine_id,
          name: product.wine,
          location:
            product.regions &&
            product.regions.length &&
            `${product.regions[0]}, ${product.country}`,
          year: product.vintage,
          url: ''
        };
        break;
      default:
        break;
    }
  }
  const responsiveCols = cols === 2 ? 'col-2 col-md-4' : 'col-6 col-md-12';

  return (
    <S.Card className={`column ${responsiveCols}`}>
      <Link to={`${url}/${item.id}`}>
        <div className="card" style={{ height: '13rem', margin: '1rem 0' }}>
          <div className="card-header">
            <div className="card-title h6">{item.name}</div>
            <small className="card-subtitle">{item.location}</small>
          </div>
          <div className="card-body" />
          <div className="card-footer columns">
            <div className="column col">
              <small className="card-subtitle text-gray">{item.year}</small>
            </div>
          </div>
        </div>
      </Link>
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
