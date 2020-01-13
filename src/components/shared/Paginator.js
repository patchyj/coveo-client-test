import PropTypes from 'prop-types';
import React from 'react';
import Paginator from 'react-hooks-paginator';
import { withTheme } from 'styled-components';
import S from '../../static/styles';

const PaginatorWrapper = ({
  total,
  pageLimit,
  setOffset,
  currentPage,
  setCurrentPage,
  palette
}) => (
  <S.Paginator palette={palette}>
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

PaginatorWrapper.propTypes = {
  total: PropTypes.number,
  pageLimit: PropTypes.number,
  setOffset: PropTypes.func,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  palette: PropTypes.string
};

PaginatorWrapper.defaultProps = {
  total: null,
  pageLimit: 12,
  setOffset: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
  palette: ''
};

export default withTheme(PaginatorWrapper);
