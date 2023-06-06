import type { Meta, StoryFn } from '@storybook/react';

import { Footer } from '../Footer';
import { navLinks, socialMedias } from '../Footer/mockFooter';
import { Header } from '../Header';
import { MainContent } from '../MainContent';
import { Markdown } from './';
import { mdx } from './mockResult';

const meta: Meta<typeof Markdown> = {
  title: 'Markdown',
  component: Markdown,
  tags: ['autodocs']
};

export default meta;

export const Standard: StoryFn<typeof Markdown> = () => {
  return (
    <div>
      <Markdown children={mdx} />
    </div>
  );
};

export const Demo: StoryFn<typeof Markdown> = () => {
  return (
    <div>
      <Header
        button={{
          name: 'Entrar',
          onClick: function (): void {
            throw new Error('Function not implemented.');
          }
        }}
      />
      <MainContent>
        <Markdown children={mdx} />;
      </MainContent>
      <Footer socialMedia={socialMedias} disclaimer="Text here" navLinks={navLinks} />
    </div>
  );
};
