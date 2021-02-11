import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import base from 'paths.macro';

import { Button, ButtonProps } from './Button';

const path = base.replace(
  /^.+\/(atoms|molecules|organisms|templates|pages)\/(.+)\//,
  '$1/$2',
);

export default {
  title: `${path}`,
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  primary: false,
  secondary: false,
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  primary: true,
  secondary: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  secondary: true,
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  primary: false,
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  primary: false,
  size: 'small',
};
