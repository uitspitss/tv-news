import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import base from 'paths.macro';

import { IndexPage, IndexPageProps } from './IndexPage';

const path = base.replace(
  /^.+\/(atoms|molecules|organisms|templates|pages)\/(.+)\//,
  '$1/$2',
);

export default {
  title: `${path}`,
  component: IndexPage,
} as Meta;

const Template: Story<IndexPageProps> = (args) => <IndexPage {...args} />;

export const Default = Template.bind({});
