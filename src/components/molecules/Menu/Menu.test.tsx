import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Menu } from './Menu';

describe('molecules/Menu', () => {
  test('snapshot test', () => {
    const { container } = render(
      <Menu trigger={<button type="button">trigger</button>}>
        <li>content</li>
        <li>content</li>
        <li>content</li>
      </Menu>,
    );
    expect(container).toMatchSnapshot();
  });

  describe('Behavior', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      render(
        <Menu trigger={<button type="button">trigger</button>}>
          <li>content</li>
          <li>content</li>
          <li>content</li>
        </Menu>,
      );
    });

    test('initial view', () => {
      expect(
        screen.getByRole('button', { name: 'trigger' }),
      ).toBeInTheDocument();
    });

    test('click, then show menu', () => {
      fireEvent.click(screen.getByRole('button', { name: 'trigger' }));

      expect(screen.getAllByText('content')).toHaveLength(3);
    });

    test('open menu, then click trigger, then close menu', () => {
      fireEvent.click(screen.getByRole('button', { name: 'trigger' }));

      expect(screen.getAllByText('content')).toHaveLength(3);

      fireEvent.click(screen.getByRole('button', { name: 'trigger' }));

      expect(screen.queryByText('content')).not.toBeInTheDocument();
    });
  });
});
