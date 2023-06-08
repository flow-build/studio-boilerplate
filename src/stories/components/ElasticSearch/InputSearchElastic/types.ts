import { Suggestions } from 'stories/components/Forms/InputSearchSuggestions/types';

export interface InputSearchElasticProps {
  placeholder: string;
  searchKey: string;
  engineName: string;
  endpointBase: string;
  onChange: (item: Suggestions | null) => void;
  className?: string;
}

export interface UseInputSearchElasticProps {
  searchKey: string;
  engineName: string;
  endpointBase: string;
  countItemsResult?: number;
}
