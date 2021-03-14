import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DeleteReportModal from '../DeleteReportModal';

export const mockReports = [
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

describe('DeleteReportModal Component', () => {
  test('Should be rendered when isOpen props true', () => {
    const title = 'Delete report modal title';

    render(
      <DeleteReportModal
        isOpen
        onClose={() => {}}
        onDelete={() => {}}
        title={title}
        reports={mockReports}
        reportName="Name"
      />
    );

    const result = screen.getByText(title);

    expect(result).toBeInTheDocument();
  });

  test('Should not be rendered when isOpen props false', () => {
    const title = 'Delete report modal title';

    render(
      <DeleteReportModal
        isOpen={false}
        onClose={() => {}}
        onDelete={() => {}}
        title={title}
        reports={mockReports}
        reportName="Name"
      />
    );

    const result = screen.queryByText(title);

    expect(result).not.toBeInTheDocument();
  });

  test('Should have title and reportName passed via props', () => {
    const title = 'Delete report modal title';
    const reportName = 'Some report name';

    render(
      <DeleteReportModal
        isOpen
        onClose={() => {}}
        onDelete={() => {}}
        title={title}
        reports={mockReports}
        reportName={reportName}
      />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getAllByText(reportName)).toHaveLength(2);
  });

  test('Should render reports passed via props', () => {
    const title = 'Delete report modal title';
    const reportName = 'Some report name';

    render(
      <DeleteReportModal
        isOpen
        onClose={() => {}}
        onDelete={() => {}}
        title={title}
        reports={mockReports}
        reportName={reportName}
      />
    );

    expect(screen.getAllByTestId('report-item')).toHaveLength(7);
  });

  test('Should call onClose callback when "Cancel" button is clicked', () => {
    const title = 'Delete report modal title';
    const reportName = 'Some report name';
    const onClose = jest.fn();

    render(
      <DeleteReportModal
        isOpen
        onClose={onClose}
        onDelete={() => {}}
        title={title}
        reports={mockReports}
        reportName={reportName}
      />
    );

    fireEvent.click(screen.queryByText('Cancel'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('Should not call onDelete callback when "Delete all" button is clicked unless a user types "Delete" word in the input', () => {
    const title = 'Delete report modal title';
    const reportName = 'Some report name';
    const onDelete = jest.fn();

    render(
      <DeleteReportModal
        isOpen
        onClose={() => {}}
        onDelete={onDelete}
        title={title}
        reports={mockReports}
        reportName={reportName}
      />
    );

    fireEvent.click(screen.queryByText('Delete all'));

    expect(onDelete).toHaveBeenCalledTimes(0);
  });

  test('Should call onDelete callback when "Delete all" button is clicked and a user entered "Delete" word in the input', () => {
    const title = 'Delete report modal title';
    const reportName = 'Some report name';
    const onDelete = jest.fn();

    const { getByTestId } = render(
      <DeleteReportModal
        isOpen
        onClose={() => {}}
        onDelete={onDelete}
        title={title}
        reports={mockReports}
        reportName={reportName}
      />
    );

    const input = getByTestId('confirm-delete-input');

    fireEvent.change(input, { target: { value: 'Delete' } });
    fireEvent.click(screen.queryByText('Delete all'));

    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
