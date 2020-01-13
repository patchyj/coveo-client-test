import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';

export const CatalogIndex = styled.div`
  @media (max-width: ${breakpoints.xs}) {
    width: 100%;
  }
`;

export const Card = styled.div`
  transition: 0.05s;
  cursor: pointer;
  margin: 1rem 0;

  .card {
    background: ${({ theme, palette }) => theme[palette].cardBg};
    height: 12rem;

    .card-body {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      text-align: center;
      img {
        height: 100px;
      }
    }
  }

  a,
  a:visited {
    color: ${({ theme, palette }) => theme[palette].cardText};
  }

  &:hover {
    a {
      text-decoration: none;
    }

    .card {
      box-shadow: 0 0 4px -1px black;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    .card {
      min-height: 6rem;

      .h6 {
        font-size: 0.6rem;
      }
    }
  }

  @media (max-width: ${breakpoints.xs}) {
    .h6 {
      font-size: 0.6rem;
    }
  }
`;

export const CatalogShow = styled.div`
  .fa-times {
    color: #555;
    &:hover {
      cursor: pointer;
      color: #222;
    }
  }

  .map {
    height: 200px;
    width: 100%;
    margin-top: 1rem;
  }

  .address {
    margin: 1rem 0;
  }

  @media (max-width: ${breakpoints.md}) {
    .address,
    .map-link {
      text-align: left;
    }
  }
  @media (max-width: ${breakpoints.sm}) {
    h2 {
      font-size: 1.4rem;
    }
  }
`;

export const OptionsPanel = styled.div`
  padding: 2rem 0;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  background: ${({ theme, palette }) => theme[palette].panelBg};
  box-shadow: inset 0 0px 10px -5px black;

  .form-inline {
    font-size: 14px;

    input {
      font-size: 14px;
      color: ${({ theme, palette }) => theme[palette].mainText};
      background: ${({ theme, palette }) => theme[palette].formBg};
    }
  }
`;

export const Hero = styled.div`
  background: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  .hero {
    padding: 3rem 0 0 0;
  }

  h3 {
    text-transform: capitalize;
  }

  @media (max-width: ${breakpoints.md}) {
    height: 120px;
  }
  @media (max-width: ${breakpoints.sm}) {
    height: 80px;
  }
`;
