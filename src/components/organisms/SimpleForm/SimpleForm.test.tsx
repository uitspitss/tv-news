import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';

import { SimpleForm } from './SimpleForm';

describe('SimpleForm', () => {
  test('snapshot test', () => {
    const onValid = () => {};
    const { container } = render(<SimpleForm onValid={onValid} />);
    expect(container).toMatchSnapshot();
  });

  describe('Behavior', () => {
    const submitFn = jest.fn().mockImplementation((data) => data);

    beforeEach(() => {
      jest.clearAllMocks();
      render(<SimpleForm onValid={submitFn} />);
    });

    test('it should display required error when value is invalid', async () => {
      userEvent.click(screen.getByRole('button'));

      expect(await screen.findAllByRole('alert')).toHaveLength(4);
    });

    test('it should display required error when email is invalid', async () => {
      userEvent.type(screen.getByLabelText('email'), 'test');

      fireEvent.click(screen.getByRole('button'));

      expect(screen.getByLabelText('email')).toHaveValue('test');

      expect(await screen.findAllByRole('alert')).toHaveLength(4);
    });

    test('it should display required error when message is invalid', async () => {
      userEvent.type(screen.getByLabelText('email'), 'mail@example.com');

      fireEvent.click(screen.getByRole('button'));

      expect(await screen.findAllByRole('alert')).toHaveLength(3);
      expect(submitFn).not.toBeCalled();
      expect(await screen.findByLabelText('email')).toHaveValue(
        'mail@example.com',
      );
    });

    test('it should display required error when checkbox is invalid', async () => {
      userEvent.type(screen.getByLabelText('email'), 'mail@example.com');
      await selectEvent.select(screen.getByLabelText('sex'), 'Male');

      fireEvent.click(screen.getByRole('button'));

      expect(await screen.findByRole('alert')).toBeInTheDocument();
      expect(submitFn).not.toBeCalled();
      expect(await screen.findByLabelText('email')).toHaveValue(
        'mail@example.com',
      );
    });

    test('it should not display errors when values are valid', async () => {
      userEvent.type(screen.getByLabelText('email'), 'mail@example.com');
      await selectEvent.select(screen.getByLabelText('sex'), 'Male');
      fireEvent.click(screen.getByLabelText('agreement'));

      fireEvent.click(screen.getByRole('button'));

      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
      expect(await screen.findByLabelText('email')).toHaveValue(
        'mail@example.com',
      );
      expect(await screen.findByLabelText('agreement')).toBeChecked();

      await waitFor(() => {
        expect(submitFn).toBeCalledTimes(1);
        expect(submitFn.mock.results[0].value).toEqual({
          email: 'mail@example.com',
          sex: { value: 'male', label: 'Male' },
          agreement: true,
        });
      });
    });
  });
});
