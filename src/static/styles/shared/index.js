/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';

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
  height: calc(100vh - 36px);
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

  .fas {
    padding: 10px;
  }

  .btn {
    color: white;
    border: none;
    font-weight: 200;

    &:hover {
      color: #bbb;
    }
  }

  .nav-dropdown {
    display: flex;
    flex-direction: column;
    background-color: #782c42;

    a {
      text-align: left;
    }
  }

  @media (max-width: ${breakpoints.xs}) {
    .navbar-section {
      flex: auto;
    }
  }
`;

export const Footer = styled.footer`
  position: relative;
  bottom: 0;

  .image-container {
    align-items: center;
    justify-content: center;

    img {
      height: 100px;
      filter: brightness(10);
    }
  }

  dd {
    font-weight: 100;
    letter-spacing: 1px;

    a,
    a:hover,
    a:visited {
      color: white;
    }

    i {
      margin-left: 1rem;
    }
  }

  @media (max-width: ${breakpoints.xs}) {
    .image-container img {
      height: 60px;
    }

    dd {
      font-size: 0.4rem;
    }
  }
`;

export const SearchBar = styled.section`
  position: relative;
  .btn {
    padding: 0 20px;
  }
  .form-input,
  .input-group-btn {
    height: 1.5rem;
  }
  .pop {
    position: absolute;
    top: 0;
    left: -8.3rem;
    padding: 0 12px 3px;
    border-radius: 6px;
    opacity: ${({ showPopover }) => (showPopover ? 1 : 0)};
    background: ${({ theme: { light } }) => light.color1};
    color: white;

    .fa-times {
      font-size: 12px;
      cursor: pointer;
    }

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-left: 12px solid ${({ theme: { light } }) => light.color1};
      border-bottom: 8px solid transparent;
      right: -10px;
      top: 6px;
    }
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
    margin-bottom: 2rem;

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

export const RangeSlider = styled.div`
  width: 100%;
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
