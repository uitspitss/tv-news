---
to: <%= abs_path %>/<%= hook_name_kebab %>.test.ts
---
import { renderHook } from '@testing-library/react-hooks'

import { <%= hook_name_camel %> } from './<%= hook_name_kebab %>'

describe('hooks/<%= hook_name_kebab %>', () => {
  test.todo('write hook test');

  // test('store data', () => {
  //  const { result } = renderHook(() => <%= hook_name_camel %>())
  // });
});
