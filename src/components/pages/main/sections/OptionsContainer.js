/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import S from '../../../../static/styles';
import RangeSlider from '../../../shared/forms/RangeSlider';
import SubCategory from './SubCategory';
import createKey from '../../../../utils/createKey';

const categoryOptions = [
  { label: 'beer' },
  { label: 'wine' },
  { label: 'spirit' }
];

const allOptions = [
  { name: 'beer', label: 'amber', alt: 'ambrée', isChecked: false },
  { name: 'beer', label: 'lager', alt: 'lager', isChecked: false },
  { name: 'beer', label: 'IPA', alt: 'IPA', isChecked: false },
  { name: 'beer', label: 'stout', alt: 'stout', isChecked: false },
  { name: 'wine', label: 'white', alt: 'blanc', isChecked: false },
  { name: 'wine', label: 'red', alt: 'rouge', isChecked: false },
  { name: 'wine', label: 'sparkling', alt: 'mousseux', isChecked: false },
  { name: 'wine', label: 'rose', alt: 'rose', isChecked: false },
  { name: 'spirit', label: 'white rum', alt: 'rhum blanc', isChecked: false },
  { name: 'spirit', label: 'dark rum', alt: 'rhum brun', isChecked: false },
  { name: 'spirit', label: 'vodka', alt: 'vodka', isChecked: false },
  { name: 'spirit', label: 'whiskey', alt: 'whisky', isChecked: false },
  { name: 'spirit', label: 'gin', alt: 'gin', isChecked: false }
];

const OptionsContainer = ({ minPrice, maxPrice, handleRange, handleTypes }) => {
  const [hovered, setHovered] = useState(false);
  const [category, setCategory] = useState('beer');
  const [options, setOptions] = useState(allOptions);
  const toggleHover = () => setHovered(!hovered);

  const handleSetCategory = e => setCategory(e.target.id);

  const handleCheckbox = e => {
    const {
      target: { id }
    } = e;
    const newOptions = options.map(o => {
      if (o.label === id) {
        return {
          ...o,
          isChecked: !o.isChecked
        };
      }
      return o;
    });
    setOptions(newOptions);
  };

  useEffect(() => {
    const selected = options.filter(o => o.isChecked);
    handleTypes(selected);
  }, [options]);

  return (
    <S.OptionsContainer>
      <details className="accordion">
        <summary className="accordion-header text-right">
          <small>Advanced</small>{' '}
          <i
            className={`fas fa-cog ${hovered ? 'spin-c' : 'spin-cc'}`}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          />
        </summary>
        <div className="accordion-body">
          <div className="form-group text-left">
            <RangeSlider
              min={minPrice}
              max={maxPrice}
              label="Price Range"
              handleRange={handleRange}
            />
            <ul className="tab tab-block">
              {categoryOptions.map((c, i) => (
                <li className="tab-item" key={createKey(c.label, i)}>
                  <small>
                    <a
                      className={`${category === c.label ? 'active' : ''}`}
                      onClick={handleSetCategory}
                      id={c.label}
                      role="presentation"
                    >
                      {c.label}
                    </a>
                  </small>
                </li>
              ))}
            </ul>
            {/* Beer options */}
            {category === 'beer' && (
              <SubCategory
                options={options.filter(o => o.name === 'beer')}
                setValue={handleCheckbox}
                header={category}
              />
            )}
            {/* Wine options */}
            {category === 'wine' && (
              <SubCategory
                options={options.filter(o => o.name === 'wine')}
                setValue={handleCheckbox}
                header={category}
              />
            )}
            {/* Spirit options */}
            {category === 'spirit' && (
              <SubCategory
                options={options.filter(o => o.name === 'spirit')}
                setValue={handleCheckbox}
                header={category}
              />
            )}
          </div>
        </div>
      </details>
    </S.OptionsContainer>
  );
};

OptionsContainer.propTypes = {
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  handleRange: PropTypes.func,
  handleCheckbox: PropTypes.func
};

OptionsContainer.defaultProps = {
  minPrice: 0,
  maxPrice: 0,
  handleRange: () => {},
  handleCheckbox: () => {}
};

export default OptionsContainer;
