import React, { useState } from 'react';
import S from '../../../../static/styles';

const OptionsContainer = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

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
          <div className="form-group">
            <select className="form-select">
              <option>Choose an option</option>
              <option>Slack</option>
              <option>Skype</option>
              <option>Hipchat</option>
            </select>
          </div>
        </div>
      </details>
    </S.OptionsContainer>
  );
};

export default OptionsContainer;
