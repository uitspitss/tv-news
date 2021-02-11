---
to: <%= abs_path %>/<%= component_name %>.test.tsx
---
import React from 'react';
import { render } from '@testing-library/react';

import { <%= component_name %> } from './<%= component_name %>';

describe('<%= path %>', () => {
  test('snapshot test', () => {
    const { container } = render(<<%= component_name %> />);
    expect(container).toMatchSnapshot();
  });

  describe('Behavior', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      render(<<%= component_name %> />);
    });

    test.todo('write component test');
  });
});
