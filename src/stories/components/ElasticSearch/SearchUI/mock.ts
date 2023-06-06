import type { SearchDriverOptions } from '@elastic/search-ui';
import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector';

const connector = new AppSearchAPIConnector({
  searchKey: 'search-feodmjyfmqinygyb4u1y254k',
  engineName: 'video-games',
  endpointBase: 'https://host-2376rb.api.swiftype.com'
});

export const congigSearchUI: SearchDriverOptions = {
  apiConnector: connector,
  initialState: {
    searchTerm: ' '
  }
};
