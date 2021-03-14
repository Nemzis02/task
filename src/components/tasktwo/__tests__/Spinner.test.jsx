import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spinner from '../Spinner';

describe('Spinner Component', () => {
  it('Should be rendered correctly', () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});
