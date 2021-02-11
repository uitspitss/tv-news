import React from 'react';
import { render } from '@testing-library/react';

import { Layout } from './Layout';

describe('Layout', () => {
  test('snapshot test', () => {
    const { container } = render(
      <Layout>
        <a href="/">link</a>
      </Layout>,
    );
    expect(container).toMatchSnapshot();
  });
});
