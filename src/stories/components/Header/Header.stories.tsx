import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Header } from './index';
import { HeaderProps } from './types';
import { ImageComponent } from '../Image/Image';

const header: Meta<typeof Header> = {
  title: 'Component/Header',
  component: Header,
  tags: ['autodocs']
};

export default header;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: (
    <ImageComponent
      src="https://seeklogo.com/images/N/next-js-logo-60FB9B8D2B-seeklogo.com.png"
      alt={'Logo'}
      width={150}
      height={30}
    />
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
  }
};
