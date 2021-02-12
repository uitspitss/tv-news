import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import base from 'paths.macro';

import { TvIcon, TvIconProps } from './TvIcon';

const path = base.replace(
  /^.+\/(atoms|molecules|organisms|templates|pages)\/(.+)\//,
  '$1/$2',
);

export default {
  title: `${path}`,
  component: TvIcon,
} as Meta;

const Template: Story<TvIconProps> = (args) => <TvIcon {...args} />;

export const Default = Template.bind({});
