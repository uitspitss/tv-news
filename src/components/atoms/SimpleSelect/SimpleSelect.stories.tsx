import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import base from 'paths.macro';

import { SimpleSelect, SimpleSelectProps } from './SimpleSelect';

const path = base.replace(
  /^.+\/(atoms|molecules|organisms|templates|pages)\/(.+)\//,
  '$1/$2',
);

export default {
  title: `${path}`,
  component: SimpleSelect,
} as Meta;

const Template: Story<SimpleSelectProps> = (args) => <SimpleSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'select',
  options: [
    { value: 'op1', label: 'label1' },
    { value: 'op2', label: 'label2' },
    { value: 'op3', label: 'label3' },
  ],
};
