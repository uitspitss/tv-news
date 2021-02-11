import React, {
  memo,
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  forwardRef,
} from 'react';
import tw, { styled } from 'twin.macro';

export type CheckboxProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * ラベル
   */
  label: string;
  /**
   * error message
   */
  error?: string;
} & ComponentPropsWithRef<'input'>;

type Props = CheckboxProps;

const Component: ForwardRefExoticComponent<Props> = forwardRef((props, ref) => {
  const { className, name, label, error } = props;

  return (
    <div className={className}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={name}>
        <input
          name={name}
          type="checkbox"
          id={name}
          aria-label={label}
          aria-invalid={error ? 'true' : 'false'}
          ref={ref}
        />
        <span className="label">{label}</span>
      </label>
      {error && (
        <div>
          <span className="error" role="alert">
            {error}
          </span>
        </div>
      )}
    </div>
  );
});

const StyledComponent = styled(Component)`
  & > {
    ${tw`flex items-center`}

    label > input {
      ${tw`mr-2 rounded`}
    }

    div > .error {
      ${tw`text-red-500`}
    }
  }
`;

/**
 * Checkbox
 */
export const Checkbox: ForwardRefExoticComponent<CheckboxProps> = memo(
  forwardRef((props, ref) => {
    return <StyledComponent {...props} ref={ref} />;
  }),
);
