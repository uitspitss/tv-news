import React from 'react';
import { render } from '@testing-library/react';

import { TvIcon } from './TvIcon';

describe('atoms/icons/TvIcon', () => {
  test('snapshot test', () => {
    const { container } = render(<TvIcon />);
    expect(container).toMatchSnapshot();
  });

  describe('Behavior', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      render(<TvIcon />);
    });

    test.todo('write component test');
  });
});
