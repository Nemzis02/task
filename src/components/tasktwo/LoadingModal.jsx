import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BaseModalContainer } from '@components/styled-components/Task';
import BaseModal from './BaseModal';
import Spinner from './Spinner';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const Text = styled.p`
  margin: 0;
  color: #3b77a8;
`;

const LoadingModal = ({ isOpen, onClose, text }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <BaseModal onClose={onClose}>
      <BaseModalContainer>
        <Container>
          <Spinner />
          <Text>{text}</Text>
        </Container>
      </BaseModalContainer>
    </BaseModal>
  );
};

LoadingModal.defaultProps = {
  text: 'Data is loading',
};

LoadingModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default LoadingModal;
