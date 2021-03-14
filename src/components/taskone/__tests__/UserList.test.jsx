import React from 'react';
import {
  render,
  screen,
  cleanup,
  act,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserList from '../UserList';

const mockUsers = [
  {
    id: 1,
    name: 'User 1',
    username: 'bot',
    email: 'hello@mail.com',
    phone: '121231313',
    address: {
      street: 'Nice',
      suite: 'yes',
      city: 'Yel',
      zipcode: '21232',
    },
  },
  {
    id: 2,
    name: 'Justin',
    username: 'bot_add_ct',
    email: 'me@mail.com',
    phone: '222223232',
    address: {
      street: 'Good',
      suite: 'noyes',
      city: 'NikeShoes',
      zipcode: '995334',
    },
  },
  {
    id: 3,
    name: 'Man',
    username: 'woman',
    email: 'child@mail.com',
    phone: '177777723',
    address: {
      street: 'Grandmother',
      suite: 'Yes',
      city: 'Wild',
      zipcode: '00999',
    },
  },
];

beforeEach(() => {
  const response = Promise.resolve({
    json: () => Promise.resolve(mockUsers),
  });

  global.fetch = jest.fn(() => response);
});

afterEach(() => {
  fetch.mockClear();
  cleanup();
});

const setup = () => {
  const utils = render(<UserList />);
  const input = utils.getByTestId('input');
  return {
    input,
    ...utils,
  };
};

describe('UserList Component', () => {
  test('Should be rendered', () => {
    render(<UserList />);
    const component = screen.queryByTestId('component');

    expect(component).toBeInTheDocument();
  });

  test('Should fetch and render 3 user items when mounts', async () => {
    await act(async () => render(<UserList />));

    const items = screen.getAllByTestId('user-item');

    expect(items).toHaveLength(3);
  });

  test('The input value should be changed when a user enters', () => {
    const { input } = setup();
    const value = 'Hello';
    fireEvent.change(input, { target: { value } });
    expect(input.value).toBe(value);
  });
});
