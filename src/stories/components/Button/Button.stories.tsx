import React from 'react';

import { Logger } from 'utils';
import { Button } from './Button';
import { ButtonComponentProps } from './types';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Generic/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' }
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    },
    color: {
      options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: { type: 'select' }
    },
    customColor: {
      control: { type: 'color' }
    }
  }
};

export default meta;

const Template: StoryFn<ButtonComponentProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => {
    Logger.info('oi');
  },
  children: 'Botão',
  variant: 'contained',
  size: 'large',
  color: 'inherit',
  fullWidth: false,
  customColor: '#00000'
};
