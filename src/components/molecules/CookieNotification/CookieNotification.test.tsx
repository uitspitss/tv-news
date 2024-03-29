import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { CookieNotification } from './CookieNotification';

describe('molecules/CookieNotification', () => {
  test('snapshot test', () => {
    const { container } = render(<CookieNotification />);
    expect(container).toMatchSnapshot();
  });

  describe('Behavior', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      render(<CookieNotification />);
    });

    test('initial view', () => {
      expect(
        screen.getByText(
          'This website uses cookies to enhance the user experience.',
        ),
      ).toBeInTheDocument();
      expect(screen.getByText('理解しました')).toBeInTheDocument();
    });
    test('click, then invisible', () => {
      fireEvent.click(screen.getByText('理解しました'));

      expect(
        screen.queryByText(
          'This website uses cookies to enhance the user experience.',
        ),
      ).not.toBeInTheDocument();
      expect(screen.queryByText('理解しました')).not.toBeInTheDocument();
    });
  });
});
