import React from 'react';
import { render } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {
  test('snapshot test', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
