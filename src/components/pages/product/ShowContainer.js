import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const ShowContainer = ({ product }) => {
  const { title, excerpt } = product;

  return (
    <div className="container grid-md">
      <div className="columns">
        <div className="column">
          <Link to="/">Back</Link>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="columns">
        <div className="column col-4 col-md-6 col-sm-12">
          <small>{excerpt}</small>
        </div>
        <div className="divider-vert" data-content="" />
      </div>
    </div>
  );
};

ShowContainer.propTypes = {
  product: PropTypes.shape({}),
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string
    })
  })
};

ShowContainer.defaultProps = {
  product: {},
  match: {}
};

export default ShowContainer;
