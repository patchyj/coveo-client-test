import PropTypes from 'prop-types';
import React from 'react';
import StarRatings from 'react-star-ratings';

const StarRating = ({ percentScore }) => {
  const float = Math.floor(percentScore) / 20;

  return (
    <div>
      <StarRatings
        rating={float}
        starRatedColor="#782c42"
        numberOfStars={5}
        starDimension="12px"
        starSpacing="0.5px"
      />
    </div>
  );
};

StarRating.propTypes = {
  percentScore: PropTypes.number
};

StarRating.defaultProps = {
  percentScore: null
};

export default StarRating;
