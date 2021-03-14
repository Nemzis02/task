import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BaseModalContainer } from '@components/styled-components/Task';
import BaseModal from './BaseModal';
import AttentionText from './AttentionText';
import Button from './Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 200px;
  padding: 20px;
  box-sizing: border-box;
`;

const Description = styled.span`
  margin-top: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-left: 10px;
`;

const DeleteModal = ({
  isOpen,
  onClose,
  onDelete,
  title,
  description
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <BaseModal onClose={onClose}>
      <BaseModalContainer>
        <Container>
          <Header>
            <AttentionText text={title} />
            <Description>{description}</Description>
          </Header>
          <ButtonContainer>
            <Button onClick={onDelete} />
            <StyledButton text="No" variant="secondary" onClick={onClose} />
          </ButtonContainer>
        </Container>
      </BaseModalContainer>
    </BaseModal>
  );
};

DeleteModal.defaultProps = {
  title: 'Are you sure you want to delete all of your files?',
  description: 'This action cannot be undone',
};

DeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DeleteModal;
