import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { toast } from 'react-toastify';

import { ToastContainer } from './ToastContainer';

describe('molecules/ToastContainer', () => {
  test('snapshot test', () => {
    const { container } = render(
      <>
        <ToastContainer />
        <button type="button" onClick={() => toast.error('error')}>
          trigger
        </button>
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  describe('Behavior', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      render(
        <>
          <ToastContainer />
          <button type="button" onClick={() => toast.error('error')}>
            trigger error
          </button>
          <button type="button" onClick={() => toast.success('success')}>
            trigger success
          </button>
          <button type="button" onClick={() => toast.info('info')}>
            trigger info
          </button>
          <button type="button" onClick={() => toast.warn('warn')}>
            trigger warn
          </button>
        </>,
      );
    });

    test('initial view', () => {
      expect(
        screen.getByRole('button', { name: 'trigger error' }),
      ).toBeInTheDocument();
    });

    test('click, then error toast', async () => {
      fireEvent.click(screen.getByRole('button', { name: 'trigger error' }));

      expect(await screen.findByRole('alert')).toBeInTheDocument();
      expect(await screen.findByText('error')).toBeInTheDocument();
    });

    test('click, then success toast', async () => {
      fireEvent.click(screen.getByRole('button', { name: 'trigger success' }));

      expect(await screen.findByRole('alert')).toBeInTheDocument();
      expect(await screen.findByText('success')).toBeInTheDocument();
    });

    test('click, then info toast', async () => {
      fireEvent.click(screen.getByRole('button', { name: 'trigger info' }));

      expect(await screen.findByRole('alert')).toBeInTheDocument();
      expect(await screen.findByText('info')).toBeInTheDocument();
    });

    test('click, then warn toast', async () => {
      fireEvent.click(screen.getByRole('button', { name: 'trigger warn' }));

      expect(await screen.findByRole('alert')).toBeInTheDocument();
      expect(await screen.findByText('warn')).toBeInTheDocument();
    });
  });
});
