import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TriangleIcon from '../TriangleIcon';

describe('TriangleIcon Component', () => {
  it('Should be rendered correctly', () => {
    const { container } = render(<TriangleIcon />);
    expect(container).toMatchSnapshot();
  });
});
