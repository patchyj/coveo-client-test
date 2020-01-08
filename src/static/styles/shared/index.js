/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Spinner = styled.svg`
  animation: rotate 1s linear infinite;
  width: 50px;
  height: 50px;
  position: absolute;
  margin-top: 150px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export const SpinnerContainer = styled.div`
  height: 500px;
  text-align: center;
`;

export const Navbar = styled.header`
  padding: 0 40px;
  background-color: #782c42;
  color: white;
  box-shadow: 0 -1px 9px 2px black;

  .navbar-brand {
    img {
      width: 13px;
    }
  }

  .btn {
    color: white;
    border: none;
    font-weight: 200;
  }
`;

export const SearchBar = styled.section`
  .btn {
    padding: 0 20px;
  }
  .form-input,
  .input-group-btn {
    height: 1.5rem;
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 36px;
  width: 400px;
  height: 350px;
  background: #efefef;
  overflow-y: scroll;
  font-size: 14px;
  box-shadow: 0 2px 3px -1px black;

  a.list-item {
    padding: 10px 0;
    transition: 0.2s;
    color: ${({ theme: { light } }) => light.color1};

    &:hover {
      background: #dfdfdf;
      text-decoration: none;
    }
  }
`;

export const Paginator = styled.div`
  .react-hooks-paginator {
    margin: 0;
    margin-bottom: 1rem;

    li {
      margin-top: 0;
    }

    .page-item {
      &.active {
        .page-link {
          background: ${({ theme: { light } }) => light.color1};
          border-color: ${({ theme: { light } }) => light.color1};
        }
      }

      .page-link {
        cursor: pointer;
        padding: 0.2rem 0.5rem;
        &:hover {
          background: #66b761;
          border-color: #66b761;
        }
      }
    }
  }
`;

export const Slider = styled.div`
  width: 100%;

  .slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: ${({ theme: { light } }) => light.color1};
      cursor: pointer;
    }

    ::-moz-range-thumb {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: ${({ theme: { light } }) => light.color1};
      cursor: pointer;
    }
  }
`;

export const Checkbox = styled.label`
  input:checked + .form-icon {
    background: ${({ theme: { light } }) => light.color1};
    border-color: ${({ theme: { light } }) => light.color1};
  }

  small {
    text-transform: capitalize;
  }
`;
