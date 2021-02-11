import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import base from 'paths.macro';

import { Header, HeaderProps } from './Header';

const path = base.replace(
  /^.+\/(atoms|molecules|organisms|templates|pages)\/(.+)\//,
  '$1/$2',
);

export default {
  title: `${path}`,
  component: Header,
  argTypes: {
    isOpen: { control: 'boolean' },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Desktop = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
