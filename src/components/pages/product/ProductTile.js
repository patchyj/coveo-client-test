import React from 'react';
import PropTypes from 'prop-types';

const ProductTile = ({ product, type }) => {
  let item = {};
  if (product) {
    switch (type) {
      case 'beers':
        item = {
          name: product.name,
          location: `${product.city}, ${product.state}`,
          year: '',
          url: product.website_url
        };
        break;
      case 'wines':
        item = {
          name: product.wine,
          location:
            product.regions && product.regions.length && product.regions[0],
          year: product.vintage,
          url: ''
        };
        break;
      default:
        break;
    }
  }
  return (
    <div className="column col-2">
      <div className="card" style={{ height: '13rem', margin: '1rem 0' }}>
        <div className="card-header">
          <div className="card-title h6">{item.name}</div>
          <small className="card-subtitle">{item.location}</small>
        </div>
        <div className="card-body">...</div>
        <div className="card-footer">
          <small className="card-subtitle text-gray">{item.year}</small>
          <a href={item.website_url}>
            {' '}
            <i className="fas fa-globe" />{' '}
          </a>
        </div>
      </div>
    </div>
  );
};

ProductTile.propTypes = {
  product: PropTypes.shape({}),
  type: PropTypes.string
};

ProductTile.defaultProps = {
  product: {},
  type: ''
};

export default ProductTile;
