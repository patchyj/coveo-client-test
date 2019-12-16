/* eslint-disable operator-linebreak */

import React, { useEffect, useState } from 'react';
import Paginator from 'react-hooks-paginator';
import ProductTile from '../ProductTile';
import stringToKey from '../../../../utils/createKey';

const IndexBody = ({ type, products, fetch }) => {
  const pageLimit = 12;

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setCurrentData(products.slice(offset, offset + pageLimit));
  }, [offset, products]);

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
  }, []);

  const tiles =
    currentData &&
    currentData.map((product, i) => {
      const name = product.name || product.wine;
      return <ProductTile product={product} key={stringToKey(name, i)} />;
    });

  return (
    <div className="hero bg-gray">
      <div className="hero-body">
        <h3>{type}</h3>
      </div>
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
      <div className="columns">{tiles}</div>
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
};

export default IndexBody;
