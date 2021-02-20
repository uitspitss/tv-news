import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import base from 'paths.macro';

import { PlayerButton, PlayerButtonProps } from './PlayerButton';

const path = base.replace(
  /^.+\/(atoms|molecules|organisms|templates|pages)\/(.+)\//,
  '$1/$2',
);

export default {
  title: `${path}`,
  component: PlayerButton,
} as Meta;

const Template: Story<PlayerButtonProps> = (args) => <PlayerButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  tvStation: {
    name: '仙台放送',
    playlistId: 'UUlElfQ7F1QndkPEFuqrDCLQ',
    prefectures: [{ name: '宮城県' }],
  },
};
