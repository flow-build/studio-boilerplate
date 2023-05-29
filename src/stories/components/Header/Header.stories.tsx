import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Header } from './index';
import { HeaderProps } from './types';

const Logo = () => <div>@[Nome]</div>;

const header: Meta<typeof Header> = {
  title: 'Component/Header',
  component: Header,
  tags: ['autodocs']
};

export default header;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: <Logo />,
  links: [
    { name: 'Início', url: '/' },
    { name: 'Sobre', url: '/sobre' },
    { name: 'Início', url: '/' },
    { name: 'Sobre', url: '/sobre' }
  ],
  button: {
    name: 'Entrar',
    onClick: action('botão clicado')
  }
};
