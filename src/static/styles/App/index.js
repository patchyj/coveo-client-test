/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const App = styled.div`
  background: ${({ theme, palette }) => theme[palette].bodyBg};
  color: ${({ theme, palette }) => theme[palette].mainText};
  min-height: 100vh;
`;
