export interface ResultSuggestions {
  meta: {
    request_id: string;
  };
  results: {
    documents: {
      suggestion: string;
    }[];
  };
}
