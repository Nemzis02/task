import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TriangleIcon from './TriangleIcon';

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #d1d1d1;
`;

const Text = styled.span`
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const AttentionText = ({ text }) => (
  <Row>
    <TriangleIcon />
    <Text>{text}</Text>
  </Row>
);

AttentionText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AttentionText;
