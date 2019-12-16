import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';

// eslint-disable-next-line import/prefer-default-export
export const CatalogIndex = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;

  @media (max-width: ${breakpoints.xs}) {
    width: 100%;
  }
`;
