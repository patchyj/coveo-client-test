/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import stringToKey from '../../../utils/createKey';

const CatalogShow = ({ fetch, products }) => {
  const { type } = useParams();

  const tiles =
    products &&
    products.map((product, i) => (
      <div className="column col-3" key={stringToKey(product.name, i)}>
        <div className="card" style={{ height: '13rem', margin: '1rem 0' }}>
          <div className="card-image">
            <img src="img/osx-el-capitan.jpg" className="img-responsive" />
          </div>
          <div className="card-header">
            <div className="card-title h5">{product.name}</div>
            <div className="card-subtitle text-gray">
              {product.city}, {product.state}
            </div>
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
    ));

  useEffect(() => {
    fetch(type);
  }, []);

  return (
    <div className="container grid-lg">
      <div className="hero bg-gray">
        <div className="hero-body">
          <h3>{type}</h3>
        </div>
      </div>
      <div className="columns">{tiles}</div>
    </div>
  );
};

export default CatalogShow;
