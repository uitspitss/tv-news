import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import base from 'paths.macro';

import { Map, MapProps } from './Map';

const path = base.replace(
  /^.+\/(atoms|molecules|organisms|templates|pages)\/(.+)\//,
  '$1/$2',
);

export default {
  title: `${path}`,
  component: Map,
} as Meta;

const Template: Story<MapProps> = (args) => <Map {...args} />;

export const Default = Template.bind({});
