import { Meta, StoryFn } from '@storybook/react';

import { MainContent } from '.';
import { Footer } from '../Footer';
import { navLinks, socialMedias } from '../Footer/mockFooter';
import { Header } from '../Header';

const meta: Meta<typeof MainContent> = {
  title: 'Generic/MainContent',
  component: MainContent
};

export default meta;

export const Standard: StoryFn<typeof MainContent> = (args) => {
  return (
    <>
      <Header
        button={{
          name: 'Entrar',
          onClick: function (): void {
            throw new Error('Function not implemented.');
          }
        }}
      />
      <MainContent {...args}>
        {' '}
        <h1>Content Here</h1>
      </MainContent>
      <Footer socialMedia={socialMedias} disclaimer="Text here" navLinks={navLinks} />
    </>
  );
};
