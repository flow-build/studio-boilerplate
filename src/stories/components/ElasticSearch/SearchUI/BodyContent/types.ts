export interface BodyContentProps {
  fields: FieldsItemResult[];
}

export interface FieldsItemResult {
  namePropComponent: string;
  namePropElasticSearch: string;
  customValue?: string;
}

export interface DynamicObject {
  name: string;
  value: string | number;
}
