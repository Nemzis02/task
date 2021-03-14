import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AttentionText from '../AttentionText';

describe('AttentionText Component', () => {
  it('Should be rendered correctly', () => {
    const { container } = render(<AttentionText text="Some text" />);
    expect(container).toMatchSnapshot();
  });

  test('Should render passed through props text', () => {
    const text = 'Test text';

    render(<AttentionText text={text} />);
    const result = screen.getByText(text);
    expect(result).toBeInTheDocument();
  });

  test('Should render warning icon', () => {
    render(<AttentionText text="Any text" />);
    const result = screen.getByAltText('Triangle');

    expect(result).toBeInTheDocument();
  });
});
