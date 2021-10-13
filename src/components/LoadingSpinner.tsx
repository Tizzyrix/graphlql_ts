import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
0% {
    transform: rotateZ(0deg);
}
100% {
    transform: rotateZ(360deg);
}
`;

const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  margin: -60px 0 0 -60px;
  animation: ${rotateAnimation} 1s infinite linear;
`;

const Loader: FC = () => {
  return <Spinner />;
};

export default Loader;
