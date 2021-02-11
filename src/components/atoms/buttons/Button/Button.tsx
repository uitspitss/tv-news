import React, {
  memo,
  ComponentPropsWithRef,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
} from 'react';
import tw, { styled } from 'twin.macro';

export type ButtonProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * children
   */
  children: ReactNode;
  /**
   * primary color
   */
  primary?: boolean;
  /**
   * secondary color
   */
  secondary?: boolean;
  /**
   * button size
   */
  size?: 'large' | 'small';
} & ComponentPropsWithRef<'button'>;

type Props = ButtonProps;

const Component: ForwardRefExoticComponent<Props> = forwardRef((props, ref) => {
  const {
    className,
    type = 'button',
    primary: _primary,
    secondary: _secondary,
    children,
    ...rest
  } = props;

  return (
    <button
      className={className}
      // eslint-disable-next-line react/button-has-type
      type={type}
      ref={ref}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </button>
  );
});

const StyledComponent = styled(Component)`
  ${tw`text-base rounded border-none px-2 py-1`}

  /* color */
  ${({ primary }) => primary && tw`bg-primary-500 text-gray-200`}
  ${({ secondary }) => secondary && tw`bg-secondary-500 text-gray-200`}

  /* size */
  ${({ size }) => size === 'large' && tw`text-lg`}
  ${({ size }) => size === 'small' && tw`text-sm`}
`;

/**
 * Button
 */
export const Button: ForwardRefExoticComponent<ButtonProps> = memo(
  forwardRef((props, ref) => {
    return <StyledComponent {...props} ref={ref} />;
  }),
);
