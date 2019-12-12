import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import S from '../../static/styles';
import Spinner from '../shared/Spinner';
import stringToKey from '../../utils/createKey';

const ResultsList = ({ searchResults, loading }) => {
  const results = searchResults && searchResults.map((result, i) => (
    <dt key={stringToKey(result.title, i)}>
      <Link to={`/results/${result.id}`}>
        {result.title}
      </Link>
    </dt>
  ));

  return (
    <S.ResultsList>
      {loading ? (<Spinner />) : (<dl>{results}</dl>)}
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
