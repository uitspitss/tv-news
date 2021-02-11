import React, { FC } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import tw, { styled } from 'twin.macro';

const semanticColors = [
  'primary',
  'secondary',
  'error',
  'warning',
  'info',
  'success',
];

type PaletteProps = {
  bg: string;
};

type BoxProps = {
  className?: string;
  color: string;
};

const Box: FC<BoxProps> = ({ color, children, className }) => (
  <div className={className}>
    <div className="label">{color}</div>
    <div className="box">{children}</div>
  </div>
);

const StyledBox: FC<BoxProps> = styled(Box)<Pick<BoxProps, 'color'>>`
  ${tw`grid grid-cols-2 gap-6`}

  & > {
    .label {
      ${tw`p-2 text-center`}
      ${({ color }) => color === 'primary' && tw`text-primary-500`}
      ${({ color }) => color === 'secondary' && tw`text-secondary-500`}
      ${({ color }) => color === 'error' && tw`text-error-500`}
      ${({ color }) => color === 'warning' && tw`text-warning-500`}
      ${({ color }) => color === 'info' && tw`text-info-500`}
      ${({ color }) => color === 'success' && tw`text-success-500`}
    }

    .box {
      ${tw`p-2 text-center`}
      ${({ color }) => color === 'primary' && tw`bg-primary-500`}
      ${({ color }) => color === 'secondary' && tw`bg-secondary-500`}
      ${({ color }) => color === 'error' && tw`bg-error-500`}
      ${({ color }) => color === 'warning' && tw`bg-warning-500`}
      ${({ color }) => color === 'info' && tw`bg-info-500`}
      ${({ color }) => color === 'success' && tw`bg-success-500`}
    }
  }
`;

const Palette: FC<PaletteProps> = ({ bg }) => (
  <div tw="grid grid-cols-1 gap-6 p-6" style={{ backgroundColor: bg }}>
    {semanticColors.map((c) => (
      <StyledBox key={c} color={c}>
        {c}
      </StyledBox>
    ))}
  </div>
);

export default {
  title: 'Palette',
  component: Palette,
} as Meta;

const Template: Story<PaletteProps> = (args) => <Palette {...args} />;

export const Light = Template.bind({});
Light.args = {
  bg: '#f5f5f5',
};

export const Dark = Template.bind({});
Dark.args = {
  bg: '#747474',
};
