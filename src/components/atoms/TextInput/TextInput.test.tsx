import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextInput } from './TextInput';

describe('TextInput', () => {
  test('snapshot test', () => {
    const { container } = render(<TextInput label="textinput label" />);
    expect(container).toMatchSnapshot();
  });

  describe('Behavior', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      render(<TextInput label="textinput label" />);
    });

    test('initial view', () => {
      expect(screen.getByLabelText('textinput label')).toBeInTheDocument();
      expect(screen.getByText('textinput label')).toBeInTheDocument();
    });

    test('input, then value is input value', () => {
      userEvent.type(
        screen.getByLabelText('textinput label'),
        'input something',
      );
      expect(screen.getByLabelText('textinput label')).toHaveValue(
        'input something',
      );
    });
  });
});
