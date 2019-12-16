/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Paginator from '../../../shared/Paginator';
import ProductTile from '../ProductTile';
import stringToKey from '../../../../utils/createKey';
import Spinner from '../../../shared/Spinner';
import S from '../../../../static/styles';
import BgImage from '../../../../static/images/vineyard.jpg';

const CatalogIndex = ({ fetch, products, loading }) => {
  const { type } = useParams();

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [cols, setCols] = useState(2);
  const [nameFilter, setNameFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');

  /* <<<<<<< FETCH INITIAL DATA DEPENDING ON URL >>>>>>> */
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

  /* <<<<<<< INITIAL SLICE OF DATA FOR PAGINATION >>>>>>> */
  useEffect(() => {
    setCurrentData(products.slice(offset, offset + 12));
  }, [offset, products]);

  /* <<<<<<< FILTER BY NAME >>>>>>> */
  useEffect(() => {
    const key = type === 'wines' ? 'wine' : 'name';

    const results = products.filter(
      p => p[key] && p[key].toLowerCase().includes(nameFilter)
    );
    setCurrentData(results.slice(offset, offset + 12));
  }, [nameFilter]);

  /* <<<<<<< FILTER BY STATE (for Beer) OR COUNTRY (for Wine) >>>>>>> */
  useEffect(() => {
    const key = type === 'wines' ? 'country' : 'state';

    const results = products.filter(
      p => p[key] && p[key].toLowerCase().includes(stateFilter)
    );
    setCurrentData(results.slice(offset, offset + 12));
  }, [stateFilter]);

  /* <<<<<<< HANDLE ONCHANGE ACCORDINGLY >>>>>>> */
  const handleNameChange = e => {
    setNameFilter(e.target.value.toLowerCase());
  };

  const handleStateChange = e => {
    setStateFilter(e.target.value.toLowerCase());
  };

  const tiles =
    currentData &&
    currentData.map((product, i) => {
      const name = product.name || product.wine;
      return (
        <ProductTile
          product={product}
          key={stringToKey(name, i)}
          type={type}
          cols={cols}
        />
      );
    });

  const renderContent = () => (
    <div>
      <S.OptionsPanel className="columns">
        <div className="column col-6">
          <div className="columns">
            <div className="column col-6">
              <div className="form-group form-inline">
                Name
                <input
                  className="form-input"
                  type="text"
                  placeholder="Search by name..."
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className="column col-6">
              <div className="form-group form-inline">
                {type === 'wines' ? 'Country' : 'State'}
                <input
                  className="form-input"
                  type="text"
                  placeholder={`Search by ${
                    type === 'wines' ? 'country' : 'state'
                  }`}
                  onChange={handleStateChange}
                />
              </div>
            </div>
          </div>
        </div>
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
      <Paginator
        total={products.length}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="columns">{tiles}</div>
      <Paginator
        total={products.length}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );

  return (
    <div className="container p-0">
      <S.Hero className="hero" bgImage={BgImage}>
        <div className="hero-body container grid-lg">
          <h3>{type}</h3>
        </div>
      </S.Hero>
      <div className="container grid-lg">
        <S.CatalogIndex>
          {loading ? (
            <S.SpinnerContainer>
              {' '}
              <Spinner />
            </S.SpinnerContainer>
          ) : (
            renderContent()
          )}
        </S.CatalogIndex>
      </div>
    </div>
  );
};

CatalogIndex.propTypes = {
  fetch: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool
};

CatalogIndex.defaultProps = {
  products: [],
  loading: false
};

export default CatalogIndex;
