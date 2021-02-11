---
to: <%= abs_path %>/<%= component_name %>.stories.tsx
---
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import base from 'paths.macro';

import { <%= component_name %>, <%= component_name %>Props } from './<%= component_name %>';

const path = base.replace(
  /^.+\/(atoms|molecules|organisms|templates|pages)\/(.+)\//,
  '$1/$2',
);

export default {
  title: `${path}`,
  component: <%= component_name %>,
} as Meta;

const Template: Story<<%= component_name %>Props> = (args) => <<%= component_name %> {...args} />;

export const Default = Template.bind({});
