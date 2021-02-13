import React from 'react';
import { render } from '@testing-library/react';

import { PlayerButton } from './PlayerButton';

describe('molecules/PlayerButton', () => {
  test('snapshot test', () => {
    const { container } = render(<PlayerButton />);
    expect(container).toMatchSnapshot();
  });

  describe('Behavior', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      render(<PlayerButton />);
    });

    test.todo('write component test');
  });
});
