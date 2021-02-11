---
to: <%= abs_path %>/<%= function_name %>.ts
---
/**
 * TODO: write an explanation of <%= function_name %>
 */
export const <%= function_name %> = (args) => {
  const { ...rest } = args;

  return { ...rest };
};
