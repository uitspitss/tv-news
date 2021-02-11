import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import base from 'paths.macro';

import { Dialog, DialogProps } from './Dialog';

const path = base.replace(
  /^.+\/(atoms|molecules|organisms|templates|pages)\/(.+)\//,
  '$1/$2',
);

export default {
  title: `${path}`,
  component: Dialog,
} as Meta;

const Template: Story<DialogProps> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  trigger: <button type="button">click me</button>,
  children: (close) => (
    <div>
      <div>content</div>
      <div>
        <button type="button" onClick={close}>
          close
        </button>
      </div>
    </div>
  ),
  overlay: true,
};
