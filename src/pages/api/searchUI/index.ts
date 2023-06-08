import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector';
import { elasticSearch } from 'config';
import { NextApiRequest, NextApiResponse } from 'next';

const connector = new AppSearchAPIConnector({
  searchKey: elasticSearch.searchKey,
  engineName: elasticSearch.engineName,
  endpointBase: elasticSearch.endpointBase
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { requestState, queryConfig } = req.body;
  const response = await connector.onSearch(requestState, queryConfig);
  res.json(response);
}
