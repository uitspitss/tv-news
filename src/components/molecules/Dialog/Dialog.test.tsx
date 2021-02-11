import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Dialog } from './Dialog';

describe('molecules/Dialog', () => {
  test('snapshot test', () => {
    const Component = () => (
      <Dialog trigger={<button type="button">trigger</button>}>
        {(close) => (
          <div>
            <div>content</div>
            <div>
              <button type="button" onClick={close}>
                close
              </button>
            </div>
          </div>
        )}
      </Dialog>
    );
    const { container } = render(<Component />);
    expect(container).toMatchSnapshot();
  });

  describe('Behavior', () => {
    const Component = () => (
      <Dialog trigger={<button type="button">trigger</button>}>
        {(close) => (
          <div>
            <div>content</div>
            <div>
              <button type="button" onClick={close}>
                close
              </button>
            </div>
          </div>
        )}
      </Dialog>
    );

    beforeEach(() => {
      jest.clearAllMocks();
      render(<Component />);
    });

    test('initial view', () => {
      expect(
        screen.getByRole('button', { name: 'trigger' }),
      ).toBeInTheDocument();
    });

    test('click, then show content', () => {
      fireEvent.click(screen.getByRole('button', { name: 'trigger' }));

      expect(screen.getByText('content')).toBeInTheDocument();
    });

    test('close button click, then closed,', () => {
      fireEvent.click(screen.getByRole('button', { name: 'trigger' }));

      expect(screen.getByText('content')).toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'close' }));

      expect(screen.queryByText('content')).not.toBeInTheDocument();
    });
  });
});
