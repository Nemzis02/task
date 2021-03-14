import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoadingModal from '../LoadingModal';

describe('LoadingModal Component', () => {
  test('Should be rendered when isOpen props true', () => {
    const text = 'Data fetch';

    render(<LoadingModal isOpen onClose={() => {}} text={text} />);

    const result = screen.getByText(text);

    expect(result).toBeInTheDocument();
  });

  test('Should not be rendered when isOpen props false', () => {
    const text = 'Data fetch';

    render(<LoadingModal isOpen={false} onClose={() => {}} text={text} />);

    const result = screen.queryByText(text);

    expect(result).not.toBeInTheDocument();
  });
});
