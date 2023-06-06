/* eslint-disable react-perf/jsx-no-new-array-as-prop */

import ReactMarkdown, { Options } from 'react-markdown';

import gfm from 'remark-gfm';

export const Markdown = ({ ...props }: Options) => {
  return (
    <>
      <div>
        <ReactMarkdown {...props} remarkPlugins={[gfm]} />
      </div>
    </>
  );
};
