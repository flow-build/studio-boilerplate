import React, { createContext } from 'react';

import { ConfigFields } from 'stories/components/ElasticSearch/SearchUI/types';

interface SearchUIContextProps {
  configFields?: ConfigFields;
}

const INITIAL_STATE: SearchUIContextProps = {
  configFields: undefined
};

export const SearchUICustonContext = createContext<SearchUIContextProps>(INITIAL_STATE);

interface SearchUIProvicerProps {
  children: React.ReactNode;
  configFields: ConfigFields;
}

export const SearchUICustomProvider = ({ children, configFields }: SearchUIProvicerProps) => {
  return (
    <SearchUICustonContext.Provider
      value={{
        configFields
      }}
    >
      {children}
    </SearchUICustonContext.Provider>
  );
};
