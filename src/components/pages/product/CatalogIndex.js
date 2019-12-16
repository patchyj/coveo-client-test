/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Paginator from 'react-hooks-paginator';
import ProductTile from './ProductTile';
import stringToKey from '../../../utils/createKey';

const CatalogIndex = ({ fetch, products }) => {
  const { type } = useParams();
  const pageLimit = 12;

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    fetch(type);
  }, []);

  useEffect(() => {
    setCurrentData(products.slice(offset, offset + pageLimit));
  }, [offset, products]);

  const tiles =
    currentData &&
    currentData.map((product, i) => (
      <ProductTile product={product} key={stringToKey(product.name, i)} />
    ));

  return (
    <div className="container grid-lg">
      <div className="hero bg-gray">
        <div className="hero-body">
          <h3>{type}</h3>
        </div>
      </div>
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

export default CatalogIndex;
