import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import base from 'paths.macro';

import { UserList, UserListProps } from './UserList';

const path = base.replace(
  /^.+\/(atoms|molecules|organisms|templates|pages)\/(.+)\//,
  '$1/$2',
);

export default {
  title: `${path}`,
  component: UserList,
  args: {
    users: [
      { id: 1, name: 'john' },
      { id: 2, name: 'lisa' },
    ],
  },
} as Meta;

const Template: Story<UserListProps> = (args) => <UserList {...args} />;

export const Default = Template.bind({});
