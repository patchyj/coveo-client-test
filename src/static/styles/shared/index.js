/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Spinner = styled.div`
  animation: spinner .5s linear infinite;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 5px solid black;
  border-top: none;
  border-bottom: none;
  position: absolute;
  margin-top: 200px;
  transform: translateY(300px);

  @keyframes spinner {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
