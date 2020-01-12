/* eslint-disable operator-linebreak */
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import S from '../../../../static/styles';
import stringToKey from '../../../../utils/createKey';
import Spinner from '../../../shared/Spinner';
import StarRating from '../../../shared/StarRating';

const ResultsList = ({ searchResults, loading, selectProduct }) => {
  const results = searchResults.map((result, i) => {
    /* <<<<<<< LODASH GET IS CLEANER TO GET REQUIRED FIELDS >>>>>>> */
    const price = get(result, 'raw.tpprixnormal');
    const id = get(result, 'raw.tpproductid');
    const ml = get(result, 'raw.tpformat');
    const category = get(result, 'raw.tpcategorie');

    return (
      <Link
        to={`/products/${id}`}
        className="list-item columns"
        key={stringToKey(result.title, i)}
        onClick={() => selectProduct(result)}
      >
        <div className="column col-xs-6">
          <div className="columns">
            <div className="column col-12">{result.title}</div>
            <div className="column col-12">
              <small>{category}</small>
            </div>
          </div>
        </div>
        <div className="column col-xs-6 text-right">
          <div className="columns">
            <div className="column col-12">
              <StarRating percentScore={result.percentScore} />
            </div>
            <div className="column col-12">
              <small>
                {price} / {ml}
              </small>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <S.ResultsList>
      {loading ? <Spinner /> : <div className="container">{results}</div>}
    </S.ResultsList>
  );
};

ResultsList.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
  selectProduct: PropTypes.func
};

ResultsList.defaultProps = {
  searchResults: [],
  loading: false,
  selectProduct: () => {}
};

export default ResultsList;
