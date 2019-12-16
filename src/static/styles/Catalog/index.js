import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';

export const CatalogIndex = styled.div`
  margin: auto;
  margin-bottom: 10rem;

  .tile-size {
    i {
      cursor: pointer;
      padding: 0.5rem;
      transition: 0.1s;

      &:hover {
        background: #782c42;
        color: white;
      }
    }
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 100%;
  }
`;

export const Card = styled.div`
  transition: 0.05s;

  &:hover {
    a {
      text-decoration: none;
    }

    .card {
      background: #eaeaea;
    }
  }
`;

export const OptionsPanel = styled.div`
  padding: 0.5rem 0;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;

  .form-inline {
    font-size: 14px;

    input {
      font-size: 14px;
    }
  }
`;

export const Hero = styled.div`
  height: 400px;
  background: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  h3 {
    color: white;
    text-transform: capitalize;
  }

  @media (max-width: ${breakpoints.md}) {
    height: 300px;
  }
  @media (max-width: ${breakpoints.sm}) {
    height: 200px;
  }
`;
