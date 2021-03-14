import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../Button';

describe('Button Component', () => {
  test('Should be rendered correctly', () => {
    const { container } = render(<Button text="Hello" onClick={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  test('Should render text passed via props', () => {
    const text = 'Click';

    render(<Button text={text} onClick={() => {}} />);

    const result = screen.getByText(text);

    expect(result).toBeInTheDocument();
  });

  test('Should call onClick callback when it is clicked', () => {
    const buttonText = 'Do';
    const onClick = jest.fn();

    render(<Button text={buttonText} onClick={onClick} />);

    fireEvent.click(screen.getByText(buttonText));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
