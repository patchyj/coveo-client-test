import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';
// eslint-disable-next-line import/prefer-default-export
export const HeroContainer = styled.div`
  width: 500px;
  margin: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18rem;

  .input-group {
    input {
      border-radius: 20px 0 0 20px;
      padding-left: 20px;
    }
     button {
      border-radius: 0 20px 20px 0;
      width: 120px;
    }
  }

  .divider {
    margin: 1rem 0;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 100%;

    .input-group {
      button {
        width: 100px;
      }
    }
  }
`;

export const ResultsList = styled.div`
  width: 500px;
  margin: auto;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;
