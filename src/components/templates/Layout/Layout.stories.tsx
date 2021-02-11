import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import base from 'paths.macro';
import tw from 'twin.macro';

import { Layout, LayoutProps } from './Layout';

const path = base.replace(
  /^.+\/(atoms|molecules|organisms|templates|pages)\/(.+)\//,
  '$1/$2',
);

export default {
  title: `${path}`,
  component: Layout,
} as Meta;

const Template: Story<LayoutProps> = (args) => (
  <Layout {...args}>
    <div tw="bg-gray-500 p-4">MAIN CONTENT</div>
  </Layout>
);

export const Desktop = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
