/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Paginator from 'react-hooks-paginator';
import ProductTile from './ProductTile';
import stringToKey from '../../../utils/createKey';
import Spinner from '../../shared/Spinner';
import S from '../../../static/styles';

const CatalogIndex = ({ fetch, products, loading }) => {
  const { type } = useParams();

  const pageLimit = 12;

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    switch (type) {
      case 'beers':
        fetch(type, 'openBrewery');
        break;
      case 'wines':
        fetch(type, 'gws', { color: 'red', limit: '100' });
        break;
      default:
        break;
    }
  }, [type]);

  useEffect(() => {
    setCurrentData(products.slice(offset, offset + pageLimit));
  }, [offset, products]);

  const tiles =
    currentData &&
    currentData.map((product, i) => {
      const name = product.name || product.wine;
      return (
        <ProductTile product={product} key={stringToKey(name, i)} type={type} />
      );
    });

  const renderContent = () => (
    <div>
      <Paginator
        totalRecords={products.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagePrevText="« Prev"
        pageNextText="Next »"
      />
      {loading ? <Spinner /> : <div className="columns">{tiles}</div>}
      <Paginator
        totalRecords={products.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagePrevText="« Prev"
        pageNextText="Next »"
      />
    </div>
  );

  return (
    <div className="container grid-lg">
      <div className="hero bg-gray">
        <div className="hero-body">
          <h3>{type}</h3>
        </div>
      </div>
      <S.CatalogIndex>
        {loading ? (
          <div className="text-center">
            {' '}
            <Spinner />
          </div>
        ) : (
          renderContent()
        )}
      </S.CatalogIndex>
    </div>
  );
};

CatalogIndex.propTypes = {
  fetch: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({}))
};

CatalogIndex.defaultProps = {
  products: []
};

export default CatalogIndex;
