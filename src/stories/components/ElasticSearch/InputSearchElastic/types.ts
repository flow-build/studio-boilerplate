export interface InputSearchElasticProps {
  placeholder: string;
  searchKey: string;
  engineName: string;
  endpointBase: string;
  onChange: CallableFunction;
}

export interface UseInputSearchElasticProps {
  searchKey: string;
  engineName: string;
  endpointBase: string;
  countItemsResult?: number;
}
