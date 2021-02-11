import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import base from 'paths.macro';

import { TextInput, TextInputProps } from './TextInput';

const path = base.replace(
  /^.+\/(atoms|molecules|organisms|templates|pages)\/(.+)\//,
  '$1/$2',
);

export default {
  title: `${path}`,
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Input = Template.bind({});
Input.args = {
  placeholder: 'placeholder',
};
