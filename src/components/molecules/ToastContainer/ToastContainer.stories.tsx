import React, { VFC } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import base from 'paths.macro';
import { toast } from 'react-toastify';

import { ToastContainer, ToastContainerProps } from './ToastContainer';

const path = base.replace(
  /^.+\/(atoms|molecules|organisms|templates|pages)\/(.+)\//,
  '$1/$2',
);

export default {
  title: `${path}`,
  component: ToastContainer,
} as Meta;

const Component: VFC<ToastContainerProps> = (args) => (
  <>
    <ToastContainer {...args} />
    <button type="button" onClick={() => toast.success('toast success')}>
      success toast
    </button>
    <button type="button" onClick={() => toast.info('toast info')}>
      info toast
    </button>
    <button type="button" onClick={() => toast.warn('toast warn')}>
      warn toast
    </button>
    <button type="button" onClick={() => toast.error('toast error')}>
      error toast
    </button>
  </>
);

const Template: Story<ToastContainerProps> = (args) => <Component {...args} />;

export const Default = Template.bind({});
