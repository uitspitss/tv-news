import React, { memo, VFC } from 'react';
import tw, { styled } from 'twin.macro';
import { useForm, UseFormMethods, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { TextInput } from '~/components/atoms/TextInput';
import { Button } from '~/components/atoms/buttons/Button';
import { Select } from '~/components/atoms/Select';
import { Checkbox } from '~/components/atoms/Checkbox';
import { SimpleSelect } from '~/components/atoms/SimpleSelect';

export type SimpleFormProps = {
  /**
   * class for twin.macro
   */
  className?: string;
  /**
   * onValid func
   */
  onValid: (data: FormValues) => void;
};

type Props = {
  methods: UseFormMethods<FormValues>;
  onValid: (data: FormValues) => void;
} & SimpleFormProps;

const schema = z.object({
  email: z.string().email(),
  sex: z.union([
    z.string().min(1, { message: 'have to select' }),
    z.object({ value: z.string(), label: z.string() }),
  ]),
  agreement: z.boolean().refine((val) => val, { message: 'have to check' }),
});

export type FormValues = z.infer<typeof schema>;

const Component: VFC<Props> = (props) => {
  const { className, methods, onValid } = props;
  const { register, handleSubmit, errors, control } = methods;

  return (
    <div className={className}>
      <div className="headerText">
        <h1>Form</h1>
      </div>
      <form onSubmit={handleSubmit(onValid)}>
        <div className="inputFields">
          <div>
            <div className="email">
              <TextInput
                name="email"
                type="email"
                label="email"
                placeholder="Email"
                ref={register}
                error={errors.email?.message}
              />
            </div>
            <div className="Sex">
              <Controller
                name="sex"
                control={control}
                defaultValue=""
                render={(renderProps) => (
                  <Select
                    label="sex"
                    placeholder="Sex"
                    options={[
                      { value: 'male', label: 'Male' },
                      { value: 'female', label: 'Female' },
                      { value: 'others', label: 'Others' },
                    ]}
                    error={errors.sex?.message}
                    {...renderProps}
                  />
                )}
              />
            </div>
            <div className="linkNews">
              <SimpleSelect
                name="like-news"
                label="Which news do you like?"
                options={[
                  { value: '', label: 'choose news type' },
                  { value: 'tech', label: 'Tech' },
                  { value: 'political', label: 'Political' },
                  { value: 'peace', label: 'Peace' },
                ]}
                error={errors.sex?.message}
              />
            </div>
            <div className="Check">
              <Checkbox
                name="agreement"
                label="agreement"
                ref={register}
                error={errors.agreement?.message}
              />
            </div>
            <div className="submitButton">
              <Button type="submit" primary size="large">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const StyledComponent = styled(Component)`
  .headerText {
    ${tw`flex flex-col text-center mb-4`}
    & > h1 {
      ${tw`sm:text-3xl text-2xl font-medium mb-4 text-primary-500`}
    }

    & > p {
      ${tw`lg:w-2/3 mx-auto leading-relaxed text-base`}
    }
  }

  .inputFields {
    ${tw`lg:w-1/2 md:w-2/3 mx-auto`}
    & > div {
      ${tw`flex flex-col justify-center`}
      & > div {
        ${tw`p-2`}
        &.submitButton {
          ${tw`mx-auto`}
        }
      }
    }
  }

  .error-text {
    ${tw`text-secondary-500`}
  }
`;

/**
 * Simple Form
 */
export const SimpleForm = memo((props: SimpleFormProps) => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  return (
    <StyledComponent
      {...props}
      {...{
        methods,
      }}
    />
  );
});
