import React, { memo, VFC, ComponentPropsWithRef } from 'react';
import tw, { styled } from 'twin.macro';

type OptionType = {
  value: string | number;
  label: string;
};

export type SimpleSelectProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * options
   */
  options: Readonly<OptionType[]>;
  /**
   * label
   */
  label: string;
  /**
   * error message
   */
  error?: string;
} & ComponentPropsWithRef<'select'>;

type Props = SimpleSelectProps;

const Component: VFC<Props> = (props) => {
  const { className, name, label, options = [], error, ...rest } = props;

  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        aria-label={label}
        aria-invalid={error ? 'true' : 'false'}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

const StyledComponent = styled(Component)`
  & > {
    select {
      ${tw`w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500`}
    }

    .error {
      ${tw`text-red-500`}
    }
  }
`;

/**
 * SimpleSelect
 */
export const SimpleSelect = memo((props: SimpleSelectProps) => {
  return <StyledComponent {...props} />;
});
