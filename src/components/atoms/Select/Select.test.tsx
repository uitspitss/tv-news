import React from 'react';
import { render, screen } from '@testing-library/react';
import selectEvent from 'react-select-event';

import { Select } from './Select';

describe('atoms/Select', () => {
  const options = [
    { value: 'op1 value', label: 'op1 label' },
    { value: 'op2 value', label: 'op2 label' },
    { value: 'op3 value', label: 'op3 label' },
  ];

  test('snapshot test', () => {
    const { container } = render(
      <Select
        name="select-name"
        label="select label"
        placeholder="select placeholder"
        options={options}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  describe('Behavior', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      render(
        <form data-testid="form">
          <Select
            name="select-name"
            label="select label"
            placeholder="select placeholder"
            options={options}
          />
        </form>,
      );
    });

    test('initial view', () => {
      expect(screen.getByLabelText('select label')).toBeInTheDocument();
      expect(screen.getByText('select label')).toBeInTheDocument();
    });

    test('select, then selected', async () => {
      await selectEvent.select(
        screen.getByLabelText('select label'),
        'op1 label',
      );

      expect(screen.getByTestId('form')).toHaveFormValues({
        'select-name': 'op1 value',
      });
    });
  });
});
