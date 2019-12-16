import React from 'react';
import PropTypes from 'prop-types';
import Paginator from 'react-hooks-paginator';
import S from '../../static/styles';

const PaginatorWrapper = ({
  total,
  pageLimit,
  setOffset,
  currentPage,
  setCurrentPage
}) => {
  return (
    <S.Paginator>
      <Paginator
        totalRecords={total}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagePrevText="« Prev"
        pageNextText="Next »"
      />
    </S.Paginator>
  );
};

PaginatorWrapper.propTypes = {
  total: PropTypes.number,
  pageLimit: PropTypes.number,
  setOffset: PropTypes.func,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func
};

PaginatorWrapper.defaultProps = {
  total: null,
  pageLimit: 12,
  setOffset: () => {},
  currentPage: 1,
  setCurrentPage: () => {}
};

export default PaginatorWrapper;
