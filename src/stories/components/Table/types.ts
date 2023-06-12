import { TableCellProps } from '@mui/material';

export type Data = { [key: string]: string | number | React.JSX.Element };

export type Order = 'asc' | 'desc';

export type ColumnProps = {
  field: string;
  label?: string;
  align?: TableCellProps['align'];
  width?: number;
};

export type PaginationConfig = {
  initialPage?: number;
  rowsPerPage?: number;
  rowPerPageOptions?: number[];
};

export type TableProps = {
  column: Array<ColumnProps>;
  rowData?: Array<Data>;
  onRowClick?: (data: Data) => void;
  sortable?: boolean;
  paginable?: boolean;
  paginationConfig?: PaginationConfig;
};
