/* eslint-disable import/prefer-default-export */
import React from 'react';
import S from '../../static/styles';

export default () => (
  <S.Spinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="2"
    />
  </S.Spinner>
);
