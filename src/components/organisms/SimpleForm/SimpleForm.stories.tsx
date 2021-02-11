import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import base from 'paths.macro';

import { SimpleForm, SimpleFormProps } from './SimpleForm';

const path = base.replace(
  /^.+\/(atoms|molecules|organisms|templates|pages)\/(.+)\//,
  '$1/$2',
);

export default {
  title: `${path}`,
  component: SimpleForm,
  argTypes: {
    isOpen: { control: 'boolean' },
  },
} as Meta;

const Template: Story<SimpleFormProps> = (args) => <SimpleForm {...args} />;

export const Desktop = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
