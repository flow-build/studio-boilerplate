type TRequestBody = { [key: string]: any };

type TResponse = {
  process_id: string;
  workflow: { id: string; name: string; version: number };
};

export type { TRequestBody, TResponse };
