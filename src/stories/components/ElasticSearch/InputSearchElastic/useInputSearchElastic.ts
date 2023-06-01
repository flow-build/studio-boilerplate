import api from '../../../../services/httpClient';
import { Suggestions } from '../../Forms/InputSearchSuggestions/types';
import { ResultSuggestions } from '../types';
import { UseInputSearchElasticProps } from './types';

export const useInputSearchElastic = ({
  searchKey,
  engineName,
  endpointBase,
  countItemsResult = 3
}: UseInputSearchElasticProps) => {
  api.setBaseUrl(endpointBase);
  api.setHeader({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${searchKey}`
  });

  const getData = async (termSearch: string): Promise<Suggestions[]> => {
    const body = {
      query: termSearch,
      size: countItemsResult
    };

    const data = await api.post<ResultSuggestions>(
      `/api/as/v1/engines/${engineName}/query_suggestion`,
      body
    );

    return (data as ResultSuggestions).results.documents.map((item: { suggestion: string }) => ({
      text: item.suggestion,
      value: item.suggestion
    }));
  };

  return {
    getData
  };
};
