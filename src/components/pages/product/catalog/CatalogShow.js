/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import S from '../../../../static/styles';
import marker from '../../../../static/images/marker.png';
import config from '../../../../../config';

const formatPhone = number => {
  const cleaned = `${number}`.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return null;
};

const Marker = () => (
  <img
    src={marker}
    alt="Marker"
    width="40"
    style={{ transform: 'translate(-50%, -50%)' }}
  />
);

const CatalogShow = ({ selected, closeBanner }) => {
  const { type } = useParams();
  let banner;

  if (type === 'breweries' && !selected.wine) {
    const {
      name,
      brewery_type,
      country,
      street,
      city,
      state,
      phone,
      website_url,
      longitude,
      latitude
    } = selected;
    banner = (
      <div className="container grid-lg">
        <div className="columns">
          <div className="column col text-right">
            <i
              className="fas fa-times"
              onClick={closeBanner}
              role="presentation"
            />
          </div>
        </div>
        <div className="columns">
          <div className="column col">
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
                  <a
                    href={website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-globe" /> website
                  </a>
                </small>
              </div>
            )}
          </div>
          <div className="column col text-right">
            <div className="column col">
              <small>
                <div>{street}</div>
                <div>{city}</div>
                <div>{state}</div>
                <div>{country}</div>
              </small>
              {latitude && longitude ? (
                <div style={{ height: '200px', width: '100%' }}>
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
                <small>
                  <a
                    href={`http://maps.google.com/?q=${`${street},${city},${state},${country}`}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See on map
                  </a>
                </small>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'wines' && !selected.brewery_type) {
    const {
      wine,
      country,
      regions,
      vintage,
      wine_slug,
      score,
      confidence_index,
      journalist_count
    } = selected;
    banner = (
      <div className="container grid-lg">
        <div className="columns">
          <div className="column col text-right">
            <i
              className="fas fa-times"
              onClick={closeBanner}
              role="presentation"
            />
          </div>
        </div>
        <div className="columns">
          <div className="column col">
            <h2>{wine}</h2>
            <div>
              {regions.length ? `${regions[0]}, ` : ''}
              {country}
            </div>
            <small>Vintage: {vintage}</small>
          </div>
          <div className="column col-3 text-right">
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
    );
  }

  return (
    <S.CatalogShow className="container" style={{ marginTop: '36px' }}>
      {banner}
    </S.CatalogShow>
  );
};

const mapStateToProps = state => ({
  selected: state.catalog.selected
});

CatalogShow.propTypes = {
  selected: PropTypes.shape({}),
  closeBanner: PropTypes.func
};

CatalogShow.defaultProps = {
  selected: {},
  closeBanner: () => {}
};

export default connect(mapStateToProps)(CatalogShow);
