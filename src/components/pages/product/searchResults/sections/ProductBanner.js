import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../../../../shared/StarRating';

const ProductBanner = ({ selected }) => {
  const { title, excerpt, uri, percentScore } = selected;

  return (
    <div className="columns" style={{ height: '400px', marginBottom: '2rem' }}>
      <div className="column hero bg-gray">
        <div className="hero-body">
          <div className="container grid-md">
            <div className="columns">
              <div className="column col-9">
                <h1>{title}</h1>
                <small>{excerpt}</small>
              </div>
            </div>
            <div className="columns">
              <div className="column col-2">
                <a href={uri} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-globe" />
                </a>
              </div>
              <div className="column col-2">
                <StarRating percentScore={percentScore} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductBanner.propTypes = {
  selected: PropTypes.shape({
    title: PropTypes.string,
    excerpt: PropTypes.string
  })
};

ProductBanner.defaultProps = {
  selected: {
    title: '',
    excerpt: ''
  }
};

export default ProductBanner;
