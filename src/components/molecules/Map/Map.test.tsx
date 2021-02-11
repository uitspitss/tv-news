import React from 'react';
import { render } from '@testing-library/react';

import { Map } from './Map';

describe('molecules/Map', () => {
  test('snapshot test', () => {
    const { container } = render(<Map />);
    expect(container).toMatchSnapshot();
  });

  describe('Behavior', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      render(<Map />);
    });

    test.todo('write component test');
  });
});
