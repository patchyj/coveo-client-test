/* eslint-disable operator-linebreak */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import S from '../../../static/styles';
import Spinner from '../../shared/Spinner';
import StarRating from '../../shared/StarRating';
import stringToKey from '../../../utils/createKey';

const ResultsList = ({ searchResults, loading }) => {
  const results =
    searchResults &&
    searchResults.map((result, i) => (
      <Link
        className="list-item columns"
        to={`/results/${result.id}`}
        key={stringToKey(result.title, i)}
      >
        <div className="column col-xs-12">{result.title}</div>
        <div className="column col-xs-12 text-right">
          <StarRating percentScore={result.percentScore} />
        </div>
      </Link>
    ));

  return (
    <S.ResultsList>
      {loading ? <Spinner /> : <div className="container">{results}</div>}
    </S.ResultsList>
  );
};

ResultsList.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool
};

ResultsList.defaultProps = {
  searchResults: [],
  loading: false
};

export default ResultsList;
