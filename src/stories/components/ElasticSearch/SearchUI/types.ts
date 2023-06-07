import type { SearchDriverOptions } from '@elastic/search-ui';
import { CardProps } from 'stories/components/Generic/Card/types';

export type WriteUrlProps = {
  replaceUrl: string;
};

export interface SearchUIProps {
  title: string;
  config: SearchDriverOptions;
  configFields: ConfigFields;
}

export interface FieldsItemResult {
  namePropComponent: string;
  namePropElasticSearch: string;
  customValue?: string;
  isArray?: boolean;
}

export interface ConfigFields {
  fields: FieldsItemResult[];
  modeCard?: CardProps['mode'];
}
