/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import config from '../../../../../../../../config';
import Marker from '../../../../../../shared/Marker';
import formatPhone from '../../../../../../../utils/formatPhone';

const BreweryBanner = ({
  name,
  brewery_type,
  country,
  street,
  city,
  state,
  phone,
  website_url,
  longitude,
  latitude,
  closeBanner
}) => (
  <Fragment>
    <div className="columns">
      <div className="column col text-right">
        <i className="fas fa-times" onClick={closeBanner} role="presentation" />
      </div>
    </div>
    <div className="columns">
      <div className="column col-6 col-md-12">
        <h2>{name}</h2>
        <h6>Size: {brewery_type}</h6>
        {phone && (
          <div>
            <small>
              <i className="fas fa-phone-alt" /> {formatPhone(phone)}
            </small>
          </div>
        )}
        {website_url && (
          <div>
            <small>
              <a href={website_url} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe" /> website
              </a>
            </small>
          </div>
        )}
      </div>
      <div className="column col">
        <small className="columns text-right">
          <div className="column address">
            <div>{street}</div>
            <div>{city}</div>
            <div>{state}</div>
            <div>{country}</div>
          </div>
        </small>
        <div className="columns text-right">
          {latitude && longitude ? (
            <div className="column map">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: config.GOOGLE_MAPS_API_KEY
                }}
                defaultCenter={{
                  lat: parseFloat(latitude),
                  lng: parseFloat(longitude)
                }}
                defaultZoom={14}
              >
                <Marker
                  lat={parseFloat(latitude)}
                  lng={parseFloat(longitude)}
                />
              </GoogleMapReact>
            </div>
          ) : (
            <div className="column map-link">
              <small>
                <a
                  href={`http://maps.google.com/?q=${`${street},${city},${state},${country}`}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See on map
                </a>
              </small>
            </div>
          )}
        </div>
      </div>
    </div>
  </Fragment>
);

BreweryBanner.propTypes = {
  name: PropTypes.string,
  brewery_type: PropTypes.string,
  country: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  phone: PropTypes.string,
  website_url: PropTypes.string,
  longitude: PropTypes.string,
  latitude: PropTypes.string,
  closeBanner: PropTypes.func
};

BreweryBanner.defaultProps = {
  name: '',
  brewery_type: '',
  country: '',
  street: '',
  city: '',
  state: '',
  phone: '',
  website_url: '',
  longitude: '',
  latitude: '',
  closeBanner: () => {}
};

export default BreweryBanner;
