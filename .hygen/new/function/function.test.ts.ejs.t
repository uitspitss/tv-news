---
to: <%= abs_path %>/<%= function_name %>.test.ts
---
import { <%= function_name %> } from './<%= function_name %>';

describe('<%= function_name %>', () => {
  test.todo('something of test');
});
