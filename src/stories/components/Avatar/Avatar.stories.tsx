import type { Meta, StoryFn } from '@storybook/react';
import { getAvatarURL } from 'utils';

import { Avatar } from './';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  tags: ['autodocs']
};

export default meta;

export const Standard: StoryFn<typeof Avatar> = () => {
  return <Avatar alt={'teste'} src={getAvatarURL('teste@fdte.io')} />;
};
