import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import base from 'paths.macro';

import {
  CookieNotification,
  CookieNotificationProps,
} from './CookieNotification';

const path = base.replace(
  /^.+\/(atoms|molecules|organisms|templates|pages)\/(.+)\//,
  '$1/$2',
);

export default {
  title: `${path}`,
  component: CookieNotification,
  args: {
    debug: true,
  },
} as Meta;

const Template: Story<CookieNotificationProps> = (args) => (
  <CookieNotification {...args} />
);

export const Default = Template.bind({});
