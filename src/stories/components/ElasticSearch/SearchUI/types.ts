import type { SearchDriverOptions } from '@elastic/search-ui';
import { CarouselProps } from 'stories/components/Carousel/types';
import { CardProps } from 'stories/components/Generic/Card/types';

export type WriteUrlProps = {
  replaceUrl: string;
};

export interface SearchUIProps {
  title: string;
  config: SearchDriverOptions;
  configFields: ConfigFields;
  carouselItems?: CarouselProps;
}

export interface FieldsItemResult {
  namePropComponent: string;
  namePropElasticSearch: string;
  customValue?: string;
  isPropArrayComponent?: boolean;
}

export interface ConfigFields {
  fields: FieldsItemResult[];
  modeCard?: CardProps['mode'];
}
