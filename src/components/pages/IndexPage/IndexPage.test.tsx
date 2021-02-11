import React from 'react';
import { render } from '@testing-library/react';

import { IndexPage } from './IndexPage';

describe('pages/IndexPage', () => {
  test('snapshot test', () => {
    const { container } = render(<IndexPage />);
    expect(container).toMatchSnapshot();
  });

  describe('Behavior', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      render(<IndexPage />);
    });

    test.todo('write component test');
  });
});
