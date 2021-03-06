import React from 'react';
import S from '../../static/styles';
import logo from '../../static/images/saq-logo.png';

const Footer = () => (
  <S.Footer className="container bg-dark">
    <div className="columns">
      <div className="column col-5 d-flex image-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="column col text-right">
        <dl>
          <dd>
            <a
              href="http://github.com/patchyj"
              target="_blank"
              rel="noopener noreferrer"
            >
              patchyj <i className="fab fa-github" />
            </a>
          </dd>
          <dd>
            <a
              href="http://www.jackjwmcgregor.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              jackjwmcgregor.com <i className="fas fa-globe" />
            </a>
          </dd>
          <dd>
            <a href="mailto:jackjwmcgregor@gmail.com">
              jackjwmcgregor@gmail.com <i className="fas fa-envelope" />
            </a>
          </dd>
        </dl>
      </div>
    </div>
  </S.Footer>
);

export default Footer;
