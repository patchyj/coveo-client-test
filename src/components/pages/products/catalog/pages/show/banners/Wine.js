/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const BreweryBanner = ({
  wine,
  country,
  regions,
  vintage,
  wine_slug,
  score,
  confidence_index,
  journalist_count,
  closeBanner
}) => (
  <Fragment>
    <div className="columns">
      <div className="column col text-right">
        <i className="fas fa-times" onClick={closeBanner} role="presentation" />
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <h2>{wine}</h2>
      </div>
    </div>
    <div className="columns">
      <div className="column col-6 col-sm-5">
        <div>
          {regions.length ? `${regions[0]}, ` : ''}
          {country}
        </div>
        <small>Vintage: {vintage}</small>
      </div>
      <div className="column col-6">
        <div className="columns">
          <div className="column col text-right">
            Average Score ({journalist_count}):{' '}
          </div>
          <div className="column col-3">{score}%</div>
        </div>
        <div className="columns">
          <div className="column col text-right">Confidence Index: </div>
          <div className="column col-3">{confidence_index}</div>
        </div>
        <div className="columns text-right">
          <div className="column col-9">
            <small>
              <a
                href={`http://maps.google.com/?q=${wine_slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                See on map
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

BreweryBanner.propTypes = {
  wine: PropTypes.string,
  country: PropTypes.string,
  regions: PropTypes.string,
  vintage: PropTypes.string,
  wine_slug: PropTypes.string,
  score: PropTypes.string,
  confidence_index: PropTypes.string,
  journalist_count: PropTypes.string,
  closeBanner: PropTypes.func
};

BreweryBanner.defaultProps = {
  wine: '',
  country: '',
  regions: '',
  vintage: '',
  wine_slug: '',
  score: '',
  confidence_index: '',
  journalist_count: '',
  closeBanner: () => {}
};

export default BreweryBanner;
