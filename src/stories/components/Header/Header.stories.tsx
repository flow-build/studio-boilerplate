import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { getAavatarURL } from 'utils';

import { Avatar } from '../Avatar';
import { MenuProps } from '../Menu/types';
import { MenuAnchor } from '../Menu/utils';
import { Header } from './index';
import { button, links, menuItems } from './mockHeader';

const menuProps: MenuProps = {
  anchor: MenuAnchor.left,
  menuItems: menuItems,
  logo: true
};

const avatar = <Avatar alt={'teste'} src={getAavatarURL('teste@fdte.io')} />;

const header: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    loggedIn: true,
    username: 'Haramura',
    links: links,
    menu: menuProps,
    button: button,
    avatar: avatar
  }
};

export default header;

export const Standard: StoryFn<typeof Header> = (args) => <Header {...args} />;
