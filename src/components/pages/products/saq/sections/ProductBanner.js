import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import S from '../../../../../static/styles';
import StarRating from '../../../../shared/StarRating';

const ProductBanner = ({ selected }) => {
  const { title, excerpt, percentScore } = selected;

  const price = get(selected, 'raw.tpprixnormal');
  const ml = get(selected, 'raw.tpformat');
  const category = get(selected, 'raw.tpcategorie');
  const producer = get(selected, 'raw.tpproducteur');
  const thumbnail = get(selected, 'raw.tpthumbnailuri');
  const saq = get(selected, 'raw.clickableuri');

  return (
    <S.ProductBanner className="columns">
      <div className="column hero">
        <div className="hero-body">
          <div className="container grid-lg">
            <div className="columns">
              <div className="column col-8">
                <div className="columns">
                  <div className="column col-11">
                    <h1>{title}</h1>
                    <p>{category}</p>
                    <small>{excerpt}</small>
                    <hr className="m-y2" />
                  </div>
                </div>
                <div className="columns">
                  <div className="column col-auto">
                    <h5>{price}</h5>
                  </div>
                  <div className="divider-vert" />
                  <div className="column col-auto">
                    <h5>{ml}</h5>
                  </div>
                </div>
                <div className="columns">
                  <div className="column col-auto">
                    <a href={saq} target="_blank" rel="noopener noreferrer">
                      <small>SAQ</small>
                    </a>
                  </div>
                  <div className="column col-auto">
                    <small>Producer: {producer}</small>
                  </div>
                  <div className="column col-auto">
                    <StarRating percentScore={percentScore} />
                  </div>
                </div>
              </div>
              <div className="column col-4">
                <img src={thumbnail} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </S.ProductBanner>
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
