import React, { createContext } from 'react';

import { CarouselProps } from 'stories/components/Carousel/types';
import { ConfigFields } from 'stories/components/ElasticSearch/SearchUI/types';
import { CardProps } from 'stories/components/Generic/Card/types';

interface SearchUIContextProps {
  configFields?: ConfigFields;
  carouselItems?: CarouselProps;
  modeView?: CardProps['mode'];
}

const INITIAL_STATE: SearchUIContextProps = {
  configFields: undefined
};

export const SearchUICustonContext = createContext<SearchUIContextProps>(INITIAL_STATE);

interface SearchUIProvicerProps {
  children: React.ReactNode;
  configFields: ConfigFields;
  carouselItems?: CarouselProps;
  modeView?: CardProps['mode'];
}

export const SearchUICustomProvider = ({
  children,
  configFields,
  carouselItems,
  modeView
}: SearchUIProvicerProps) => {
  return (
    <SearchUICustonContext.Provider
      value={{
        configFields,
        carouselItems,
        modeView
      }}
    >
      {children}
    </SearchUICustonContext.Provider>
  );
};
