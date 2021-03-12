import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserList from './UserList';

// jest.mock('fetch');

const users = [
  {
    id: 1,
    name: 'Hello',
    userName: 'Me',
    email: 'me',
    phone: '123',
    address: {
      street: '312',
      suite: 'gggg¡¡¡',
      city: 'Yel',
      zipcode: '2132'
    }
  },
];

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(users),
}));

beforeEach(() => {
  fetch.mockClear();
});

test('renders a message', async () => {
  // global.fetch.mockImplementationOnce(() => Promise.resolve(users));

  render(<UserList />);

  const items = await screen.findAllByTestId('test');
  expect(items).toHaveLength(1);
});
