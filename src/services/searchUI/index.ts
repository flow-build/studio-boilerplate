import type { RequestState, QueryConfig } from '@elastic/search-ui';
import api from 'services/httpClient';
import { Logger } from 'utils';

class SearchUIConnector {
  constructor() {
    Logger.info('SearchUIConnector');
  }

  async onSearch(requestState: RequestState, queryConfig: QueryConfig) {
    const body = {
      requestState,
      queryConfig
    };

    const response = await api.post('/api/searchUI', body);

    return response.data;
  }
}

export default SearchUIConnector;
