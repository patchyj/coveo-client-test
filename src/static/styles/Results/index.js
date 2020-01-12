import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';
// eslint-disable-next-line import/prefer-default-export
export const ProductBanner = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;

  img {
    width: 100%;
  }

  @media (max-width: ${breakpoints.md}) {
    h1 {
      font-size: 1.5rem;
    }

    .image-container {
      text-align: center;
    }
  }
  @media (max-width: ${breakpoints.xs}) {
    font-size: 1rem;
    img {
      width: 50%;
    }
  }
`;
