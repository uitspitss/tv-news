import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('atoms/Checkbox', () => {
  test('snapshot test', () => {
    const { container } = render(<Checkbox label="checkbox label" />);
    expect(container).toMatchSnapshot();
  });

  describe('Behavior', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      render(<Checkbox label="checkbox label" />);
    });

    test('initial view', () => {
      expect(screen.getByLabelText('checkbox label')).toBeInTheDocument();
      expect(screen.getByText('checkbox label')).toBeInTheDocument();
    });

    test('click, then checked', () => {
      expect(screen.getByLabelText('checkbox label')).not.toBeChecked();
      fireEvent.click(screen.getByLabelText('checkbox label'));
      expect(screen.getByLabelText('checkbox label')).toBeChecked();
    });
  });
});
