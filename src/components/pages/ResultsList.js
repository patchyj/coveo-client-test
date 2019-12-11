import React from 'react';
import { Link } from 'react-router-dom';
import S from '../../static/styles';
import Spinner from '../shared/Spinner';

const stringToKey = string => string.trim().replace(/\s/g, '-');

const ResultsList = ({ searchResults, loading }) => {
  const results = searchResults && searchResults.map(result => (
    <dt key={stringToKey(result.title)}>
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

export default ResultsList;
