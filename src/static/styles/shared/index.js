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
  padding: 20px;

  .btn {
    border: none;
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 76px;
  width: 300px;
  height: 300px;
  background: white;
  overflow-y: scroll;
  border: 1px solid #782c42;
  font-size: 14px;

  a {
    padding: 10px 0;
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
          background: #782c42;
          border-color: #782c42;
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
