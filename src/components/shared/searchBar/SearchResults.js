/* eslint-disable operator-linebreak */
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { withTheme } from 'styled-components';
import S from '../../../static/styles';
import stringToKey from '../../../utils/createKey';
import Spinner from '../Spinner';
import StarRating from '../StarRating';

const SearchResults = ({ searchResults, loading, selectProduct }) => {
  const results = searchResults.map((result, i) => {
    const price = get(result, 'raw.tpprixnormal');
    const id = get(result, 'raw.tpproductid');
    const ml = get(result, 'raw.tpformat');
    const category = get(result, 'raw.tpcategorie');
    return (
      <Link
        className="list-item columns"
        to={`/products/${id}`}
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
    <S.SearchResults>
      {loading ? (
        <S.SpinnerContainer>
          {' '}
          <Spinner />
        </S.SpinnerContainer>
      ) : (
        <div className="container results">{results}</div>
      )}
    </S.SearchResults>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
  selectProduct: PropTypes.func
};

SearchResults.defaultProps = {
  searchResults: [],
  loading: false,
  selectProduct: () => {}
};

export default withTheme(SearchResults);
