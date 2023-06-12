import { configFields, mockCategories } from '__mocks__';
import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector';
import SearchUIConnector from 'services/searchUI';

export const useListings = (titlePage: string, searchTerm?: string, showCarousel?: boolean) => {
  const connector = new SearchUIConnector();

  const congigSearchUI = {
    apiConnector: connector as AppSearchAPIConnector,
    initialState: {
      searchTerm: searchTerm ? searchTerm : ' '
    }
  };

  const data = {
    title: titlePage,
    config: congigSearchUI,
    configFields,
    carouselItems: showCarousel
      ? {
          data: mockCategories,
          slidesPerView: 10
        }
      : undefined
  };

  return {
    data
  };
};
