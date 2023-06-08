import React, { createContext } from 'react';

import { CarouselProps } from 'stories/components/Carousel/types';
import { ConfigFields } from 'stories/components/ElasticSearch/SearchUI/types';

interface SearchUIContextProps {
  configFields?: ConfigFields;
  carouselItems?: CarouselProps;
}

const INITIAL_STATE: SearchUIContextProps = {
  configFields: undefined
};

export const SearchUICustonContext = createContext<SearchUIContextProps>(INITIAL_STATE);

interface SearchUIProvicerProps {
  children: React.ReactNode;
  configFields: ConfigFields;
  carouselItems?: CarouselProps;
}

export const SearchUICustomProvider = ({
  children,
  configFields,
  carouselItems
}: SearchUIProvicerProps) => {
  return (
    <SearchUICustonContext.Provider
      value={{
        configFields,
        carouselItems
      }}
    >
      {children}
    </SearchUICustonContext.Provider>
  );
};
