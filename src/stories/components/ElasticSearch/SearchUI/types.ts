import type { SearchDriverOptions } from '@elastic/search-ui';

export type WriteUrlProps = {
  replaceUrl: string;
};

export interface SearchUIProps {
  title: string;
  config: SearchDriverOptions;
}
