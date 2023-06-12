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
  api.setHeader({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${searchKey}`
  });

  const getData = async (termSearch: string): Promise<Suggestions[]> => {
    const body = {
      query: termSearch,
      size: countItemsResult
    };

    const response = await api.post<ResultSuggestions>(
      `${endpointBase}/api/as/v1/engines/${engineName}/query_suggestion`,
      body
    );

    if (!response.data) {
      return [];
    }

    return response.data.results.documents.map((item: { suggestion: string }) => ({
      text: item.suggestion,
      value: item.suggestion
    }));
  };

  return {
    getData
  };
};
