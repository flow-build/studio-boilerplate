import React from 'react';

import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import { getAavatarURL } from 'utils';

import { Avatar } from '../Avatar';
import { ImageComponent } from '../Image';
import { Header } from './index';
import { HeaderProps } from './types';

const header: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs']
};

export default header;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: (
    <ImageComponent src="https://img.logoipsum.com/263.svg" alt={'Logo'} width={150} height={30} />
  ),
  loggedIn: true,
  username: 'Haramura',
  links: [
    { name: '[Início]', url: '/' },
    { name: '[Sobre]', url: '/sobre' },
    { name: '[Contato]', url: '/sobre' },
    { name: '[FAQ]', url: '/faq' }
  ],
  button: {
    name: 'Entrar',
    onClick: action('botão clicado')
  },
  avatar: <Avatar alt={'teste'} src={getAavatarURL('teste@fdte.io')} />
};
