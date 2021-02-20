import React from 'react';
import { render } from '@testing-library/react';

import { PlayerButton } from './PlayerButton';

describe('molecules/PlayerButton', () => {
  test('snapshot test', () => {
    const { container } = render(
      <PlayerButton
        tvStation={{
          name: '仙台放送',
          playlistId: 'UUlElfQ7F1QndkPEFuqrDCLQ',
          prefectures: [{ name: '宮城県' }],
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  describe('Behavior', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      render(
        <PlayerButton
          tvStation={{
            name: '仙台放送',
            playlistId: 'UUlElfQ7F1QndkPEFuqrDCLQ',
            prefectures: [{ name: '宮城県' }],
          }}
        />,
      );
    });

    test.todo('write component test');
  });
});
