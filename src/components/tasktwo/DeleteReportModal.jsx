import React, { useState, useEffect } from 'react';
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
`;

const StyledButton = styled(Button)`
  margin-left: 10px;
`;

const ReportsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 35px;
  border: 1px solid #a0a0a0;
  height: 110px;
  overflow: auto;
`;

const Report = styled.span`
  padding-left: 10px;
  color: #3b77a8;
  user-select: none;
`;

const WarningText = styled.p`
  margin: 10px 0 6px;
  text-align: left;
`;

const Input = styled.input`
  font-size: 16px;
  border: 0.5px solid #e2e2e2;
  border-bottom: 1px solid #acacac;
`;

const DeleteReportModal = ({
  isOpen,
  onClose,
  onDelete,
  title,
  reports,
  reportName,
}) => {
  const [value, setValue] = useState('');
  const isDeleteButtonDisabled = value !== 'Delete';

  useEffect(() => {
    setValue('');
  }, [isOpen]);
  if (!isOpen) {
    return null;
  }

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <BaseModal onClose={onClose}>
      <BaseModalContainer>
        <Container>
          <Header>
            <AttentionText text={title} />
            <Description>
              <span>
                If you delete the&nbsp;
                <b>{reportName}</b>
                &nbsp; report, you will also delete the associated history:
              </span>
            </Description>
            <ReportsContainer>
              {reports.map(({ id, name }) => (
                <Report key={id} data-testid="report-item">{name}</Report>
              ))}
            </ReportsContainer>
            <WarningText>
              Please type word &apos;Delete&apos; to remove the&nbsp;
              <b>{reportName}</b>
              &nbsp; report and its associated history:
            </WarningText>
            <Input data-testid="confirm-delete-input" type="text" onChange={onChange} value={value} />
          </Header>
          <ButtonContainer>
            <Button text="Delete all" onClick={onDelete} disabled={isDeleteButtonDisabled} />
            <StyledButton text="Cancel" variant="secondary" onClick={onClose} />
          </ButtonContainer>
        </Container>
      </BaseModalContainer>
    </BaseModal>
  );
};

DeleteReportModal.defaultProps = {
  title: 'Are you sure you want to delete this report and its history?',
};

DeleteReportModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  title: PropTypes.string,
  reports: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
  reportName: PropTypes.string.isRequired,
};

export default DeleteReportModal;
