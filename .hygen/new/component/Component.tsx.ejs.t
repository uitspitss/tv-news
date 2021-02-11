---
to: <%= abs_path %>/<%= component_name %>.tsx
---
import React, { memo, VFC } from 'react';
import tw, { styled } from 'twin.macro';

export type <%= component_name %>Props = {
  /**
   * class for twin.macro
   */
  className?: string;
};

type Props = <%= component_name %>Props;

const Component: VFC<Props> = (props) => {
  const { className } = props;

  return (
    <<%= tag %> className={className} >
    </<%= tag %>>
  )
}

const StyledComponent = styled(Component)`
`;

/**
 * TODO: write an explanation of <%= component_name %>
 */
export const <%= component_name %> = memo((props: <%= component_name %>Props) => {
  return (
    <StyledComponent {...props} />
  );
});
