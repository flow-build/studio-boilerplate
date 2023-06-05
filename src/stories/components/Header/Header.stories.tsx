import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { ImageComponent } from '../Image';
import { MenuProps } from '../Menu/types';
import { MenuAnchor } from '../Menu/utils';
import { Header } from './index';
import { button, links, menuItems } from './mockHeader';
import { HeaderProps } from './types';

const header: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs']
};

export default header;

export const Standard: StoryFn<HeaderProps> = (args) => {
  const menuProps: MenuProps = {
    anchor: MenuAnchor.left,
    menuItems: menuItems,
    logo: true
  };

  return (
    <Header
      {...args}
      logo={
        <ImageComponent
          src="https://img.logoipsum.com/263.svg"
          alt="Logo"
          width={150}
          height={30}
        />
      }
      loggedIn={true}
      username="Haramura"
      links={links}
      menu={menuProps}
      button={button}
    />
  );
};
