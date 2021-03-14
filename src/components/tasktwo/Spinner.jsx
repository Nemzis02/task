import React from 'react';
import styled, { keyframes } from 'styled-components';

const breatheAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Circle = styled.div`
  position: relative;
  display: inline-block;
  width: 70px;
  height: 70px;

  & div {
    position: absolute;
    display: block;
    width: 54px;
    height: 54px;
    margin: 8px;
    border: 7px solid #11538a;
    border-radius: 50%;
    border-color: #11538a transparent transparent transparent;
    box-sizing: border-box;
    animation: ${breatheAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

const Spinner = () => (
  <Circle>
    <div />
    <div />
    <div />
    <div />
  </Circle>
);

export default Spinner;
