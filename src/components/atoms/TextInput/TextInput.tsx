import React, {
  memo,
  ComponentPropsWithRef,
  forwardRef,
  ForwardRefExoticComponent,
} from 'react';
import tw, { styled } from 'twin.macro';

export type TextInputProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * label
   */
  label: string;
  /**
   * error message
   */
  error?: string;
} & ComponentPropsWithRef<'input'>;

type Props = TextInputProps;

const Component: ForwardRefExoticComponent<Props> = forwardRef((props, ref) => {
  const { className, name, type = 'text', label, error, ...rest } = props;

  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        aria-label={label}
        aria-invalid={error ? 'true' : 'false'}
        ref={ref}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
      {error && (
        <span className="error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
});

const StyledComponent = styled(Component)`
  & > {
    input {
      ${tw`w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500`}
    }

    .error {
      ${tw`text-red-500`}
    }
  }
`;

/**
 * TextInput
 */
export const TextInput: ForwardRefExoticComponent<TextInputProps> = memo(
  forwardRef((props, ref) => {
    return <StyledComponent {...props} ref={ref} />;
  }),
);
