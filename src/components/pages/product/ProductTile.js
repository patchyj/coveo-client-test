import React from 'react';

const ProductTile = ({ product }) => (
  <div className="column col-2">
    <div className="card" style={{ height: '13rem', margin: '1rem 0' }}>
      <div className="card-header">
        <div className="card-title h6">{product.name}</div>
        <small className="card-subtitle text-gray">
          {product.city}, {product.state}
        </small>
      </div>
      <div className="card-body">...</div>
      <div className="card-footer">
        <a href={product.website_url}>
          {' '}
          <i className="fas fa-globe" />{' '}
        </a>
      </div>
    </div>
  </div>
);

export default ProductTile;
