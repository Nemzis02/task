import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
`;

const IconImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  user-select: none;
  width: 100%;
  height: 100%;
`;

const Triangle = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 0;
  height: 0;
  border-top: 0;
  border-bottom: 21px solid #ca2128;
  border-left: 11px solid transparent;
  border-right: 12px solid transparent;
`;

const TriangleIcon = () => (
  <Container>
    <Triangle />
    <IconImage src="images/triangle.svg" alt="Triangle" />
  </Container>
);

export default TriangleIcon;
