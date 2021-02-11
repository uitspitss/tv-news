import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  test('snapshot test', () => {
    const { container } = render(<Button>button</Button>);
    expect(container).toMatchSnapshot();
  });

  describe('Behavior', () => {
    const clickFn = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();
      render(<Button onClick={clickFn}>button</Button>);
    });

    test('initial view', () => {
      expect(
        screen.getByRole('button', { name: 'button' }),
      ).toBeInTheDocument();
      expect(screen.getByText('button')).toBeInTheDocument();
    });

    test('click, then clickFn is called', () => {
      fireEvent.click(screen.getByRole('button', { name: 'button' }));
      expect(clickFn).toBeCalledTimes(1);
    });
  });
});
