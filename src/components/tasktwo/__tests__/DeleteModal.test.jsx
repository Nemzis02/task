import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DeleteModal from '../DeleteModal';

describe('DeleteModal Component', () => {
  test('Should be rendered when isOpen props true', () => {
    const title = 'Delete modal title';

    render(
      <DeleteModal
        isOpen
        onClose={() => {}}
        onDelete={() => {}}
        title={title}
      />
    );

    const result = screen.getByText(title);

    expect(result).toBeInTheDocument();
  });

  test('Should not be rendered when isOpen props false', () => {
    const title = 'Delete modal title';

    render(
      <DeleteModal
        isOpen={false}
        onClose={() => {}}
        onDelete={() => {}}
        title={title}
      />
    );

    const result = screen.queryByText(title);

    expect(result).not.toBeInTheDocument();
  });

  test('Should call onClose callback when "No" button is clicked', () => {
    const onClose = jest.fn();

    render(
      <DeleteModal
        isOpen
        onClose={onClose}
        onDelete={() => {}}
        title="Delete modal title"
      />
    );

    fireEvent.click(screen.queryByText('No'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('Should call onDelete callback when "Yes" button is clicked', () => {
    const onDelete = jest.fn();

    render(
      <DeleteModal
        isOpen
        onClose={() => {}}
        onDelete={onDelete}
        title="Delete modal title"
      />
    );

    fireEvent.click(screen.queryByText('Yes'));

    expect(onDelete).toHaveBeenCalledTimes(1);
  });

  test('Should have passed via props title and description', () => {
    const title = 'Title';
    const description = 'Description';

    render(
      <DeleteModal
        isOpen
        onClose={() => {}}
        onDelete={() => {}}
        title={title}
        description={description}
      />
    );

    expect(screen.queryByText(title)).toBeInTheDocument();
    expect(screen.queryByText(description)).toBeInTheDocument();
  });
});
