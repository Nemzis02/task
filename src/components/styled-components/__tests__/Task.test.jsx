import React from 'react';
import { render } from '@testing-library/react';
import { Task } from '@components/styled-components/Task';
import 'jest-styled-components';

describe('Task styled component', () => {
  it('Should be rendered correctly', () => {
    const { container } = render(<Task />);
    expect(container).toMatchSnapshot();
  });
});
