import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';
// eslint-disable-next-line import/prefer-default-export
export const HeroContainer = styled.div`
  position: sticky;
  background: white;
  z-index: 10;
  top: 1rem;
  width: 500px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  img {
    width: 50px;
    margin-bottom: 1rem;
  }

  form {
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

    .lucky {
      padding: 0.5rem;
      small {
        color: #6c6c6c;
        font-weight: bold;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          color: #782c42;
        }
      }
    }
  }

  .divider {
    margin-top: 1rem;
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
  height: 300px;
  margin: auto;
  text-align: left;
  display: flex;
  justify-content: center;

  a.list-item {
    padding: 15px 10px;
    transition: 0.2s;
    color: #782c42;

    &:hover {
      background: #eee;
      text-decoration: none;
    }
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 100%;
  }
`;

export const OptionsContainer = styled.div`
  small,
  .fa-cog {
    cursor: pointer;
    color: #782c42;
  }

  .spin-c {
    animation: spin-c 0.2s;
  }

  .spin-cc {
    animation: spin-cc 0.2s;
  }

  .accordion-body {
    margin: auto;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  .tab-block {
    box-sizing: border-box;
    width: 320px;
    margin-top: 15px;
    text-transform: capitalize;
  }

  .tab .tab-item a {
    padding: 0;
  }

  .rc-slider-rail,
  .rc-slider-track {
    height: 2px;
  }

  @keyframes spin-c {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-cc {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;
