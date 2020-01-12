/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import S from '../../../../../../static/styles';
import BreweryBanner from './banners/Brewery';
import WineBanner from './banners/Wine';

const CatalogShow = ({ selected, closeBanner }) => {
  const { type } = useParams();
  let banner;

  if (type === 'breweries' && !selected.wine) {
    banner = <BreweryBanner {...selected} closeBanner={closeBanner} />;
  }

  if (type === 'wines' && !selected.brewery_type) {
    banner = <WineBanner {...selected} closeBanner={closeBanner} />;
  }

  return (
    <S.CatalogShow className="container grid-lg" style={{ marginTop: '36px' }}>
      {banner}
    </S.CatalogShow>
  );
};

CatalogShow.propTypes = {
  selected: PropTypes.shape({}),
  closeBanner: PropTypes.func
};

CatalogShow.defaultProps = {
  selected: {},
  closeBanner: () => {}
};

export default CatalogShow;
