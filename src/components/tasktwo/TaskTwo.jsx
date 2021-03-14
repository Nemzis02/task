import React, { useState } from 'react';
import styled from 'styled-components';
import { Content, Heading, Task } from '@components/styled-components/Task';
import LoadingModal from './LoadingModal';
import DeleteModal from './DeleteModal';
import DeleteReportModal from './DeleteReportModal';

const mockReports = [
  {
    id: 1,
    name: 'January 2020',
  },
  {
    id: 2,
    name: 'February 2020',
  },
  {
    id: 3,
    name: 'March 2020',
  },
  {
    id: 4,
    name: 'April 2020',
  },
  {
    id: 5,
    name: 'May 2020',
  },
  {
    id: 6,
    name: 'June 2020',
  },
  {
    id: 7,
    name: 'July 2020',
  },
];

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TaskTwo = () => {
  const [isLoadingModalOpen, setIsLoadingModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteReportModalOpen, setIsDeleteReportModalOpen] = useState(false);

  const toggleLoadingModal = () => {
    setIsLoadingModalOpen((isOpen) => !isOpen);
  };

  const toggleDeleteModal = () => {
    setIsDeleteModalOpen((isOpen) => !isOpen);
  };

  const toggleDeleteReportModal = () => {
    setIsDeleteReportModalOpen((isOpen) => !isOpen);
  };

  const onDelete = () => {
    toggleDeleteModal();
  };

  const onDeleteReport = () => {
    toggleDeleteReportModal();
  };

  return (
    <Task>
      <Heading>Task Two</Heading>
      <Content>
        <ButtonContainer>
          <button type="button" onClick={toggleLoadingModal}>
            Open loading modal
          </button>
          <button type="button" onClick={toggleDeleteModal}>
            Open delete modal
          </button>
          <button type="button" onClick={toggleDeleteReportModal}>
            Open delete report modal
          </button>
        </ButtonContainer>
        <LoadingModal
          onClose={toggleLoadingModal}
          isOpen={isLoadingModalOpen}
        />
        <DeleteModal
          onDelete={onDelete}
          onClose={toggleDeleteModal}
          isOpen={isDeleteModalOpen}
        />
        <DeleteReportModal
          onDelete={onDeleteReport}
          onClose={toggleDeleteReportModal}
          isOpen={isDeleteReportModalOpen}
          reports={mockReports}
          reportName="Executive metrics"
        />
      </Content>
    </Task>
  );
};

export default TaskTwo;
