import React from 'react';
import { render, screen } from '@testing-library/react';

import { UserList } from './UserList';

describe('organisms/UserList', () => {
  const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'lisa' },
  ];

  test('snapshot test', () => {
    const { container } = render(<UserList users={users} />);
    expect(container).toMatchSnapshot();
  });

  describe('Behavior', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      render(<UserList users={users} />);
    });

    test('initial view', () => {
      expect(screen.getByText('1: john')).toBeInTheDocument();
      expect(screen.getByText('2: lisa')).toBeInTheDocument();
    });
  });
});
