import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BaseModal from '../BaseModal';

describe('BaseModal Component', () => {
  test('Should render children', () => {
    const text = 'Hello';

    render(
      <BaseModal>
        <span>{text}</span>
      </BaseModal>
    );
    const result = screen.getByText(text);
    expect(result).toBeInTheDocument();
  });

  test('Should call onClose callback when it is clicked on overlay', () => {
    const onClose = jest.fn();

    render(
      <BaseModal onClose={onClose}>
        <span>Any data</span>
      </BaseModal>
    );

    fireEvent.click(screen.getByTestId('overlay'));

    expect(onClose).toHaveBeenCalled();
  });

  test('Should call onClose callback when the Escape is pressed', () => {
    const onClose = jest.fn();

    render(
      <BaseModal onClose={onClose}>
        <span>Any data again</span>
      </BaseModal>
    );

    fireEvent.keyUp(screen.getByTestId('overlay'), { key: 'Escape' });

    expect(onClose).toHaveBeenCalled();
  });
});
