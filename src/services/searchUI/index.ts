import type { RequestState, QueryConfig } from '@elastic/search-ui';
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

    const response = await fetch('/api/searchUI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    return response.json();
  }
}

export default SearchUIConnector;
