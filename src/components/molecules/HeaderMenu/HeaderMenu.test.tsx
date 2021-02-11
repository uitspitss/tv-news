import React from 'react';
import { render } from '@testing-library/react';

import { HeaderMenu } from './HeaderMenu';

describe('HeaderMenuList', () => {
  test('snapshot test', () => {
    const { container } = render(<HeaderMenu />);
    expect(container).toMatchSnapshot();
  });
});
