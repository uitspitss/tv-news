import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { SimpleSelect } from './SimpleSelect';

describe('atoms/SimpleSelect', () => {
  const options = [
    { value: 'op1 value', label: 'op1 label' },
    { value: 'op2 value', label: 'op2 label' },
    { value: 'op3 value', label: 'op3 label' },
  ];

  test('snapshot test', () => {
    const { container } = render(
      <SimpleSelect
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
        <SimpleSelect
          name="select-name"
          label="select label"
          placeholder="select placeholder"
          options={options}
        />,
      );
    });

    test('initial view', () => {
      expect(screen.getByLabelText('select label')).toBeInTheDocument();
      expect(screen.getByText('select label')).toBeInTheDocument();
    });

    test('select, then selected', () => {
      fireEvent.select(screen.getByLabelText('select label'), 'op1 label');
      expect(screen.getByLabelText('select label')).toHaveValue('op1 value');
    });
  });
});
