import React, {
  memo,
  forwardRef,
  ForwardRefExoticComponent,
  ComponentPropsWithRef,
} from 'react';
import tw, { styled } from 'twin.macro';
import ReactSelect, { OptionsType } from 'react-select';

type OptionType = {
  value: string | number;
  label: string;
};

export type SelectProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * options
   */
  options: OptionsType<OptionType>;
  /**
   * placeholder
   */
  placeholder: string;
  /**
   * name
   */
  name: string;
  /**
   * label
   */
  label: string;
  /**
   * error message
   */
  error?: string;
} & ComponentPropsWithRef<'select'>;

type Props = SelectProps;

const Component: ForwardRefExoticComponent<Props> = forwardRef((props, ref) => {
  const {
    className,
    options,
    placeholder,
    name,
    label,
    error,
    ...rest
  } = props;

  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <ReactSelect
        classNamePrefix="select"
        id={name}
        options={options}
        placeholder={placeholder}
        name={name}
        singleValue
        aria-label={label}
        aria-invalid={error ? 'true' : 'false'}
        // @ts-expect-error ref type
        ref={ref}
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
  /* REF: https://react-select.com/styles#using-classnames */

  & {
    .select__control {
      ${tw`bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500`}
    }

    .select__value-container {
      ${tw`py-1`}
    }

    /* .select__value {
    } */

    /* .select__menu {
      .select__menu-list {
        .select__option {
          &--is-focused {
          }

          &--is-selected {
          }

          &--is-selected&--is-focused {
          }
        }
      }
    } */

    /* .select__indicators {
      .select__clear-indicator {
      }
    } */

    .error {
      ${tw`text-red-500`}
    }
  }
`;

/**
 * Select
 */
export const Select: ForwardRefExoticComponent<SelectProps> = memo(
  forwardRef((props, ref) => {
    return <StyledComponent {...props} ref={ref} />;
  }),
);
