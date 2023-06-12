import { useState } from 'react';

import { PaginationConfig } from './types';

export function usePagination(config?: PaginationConfig) {
  const [page, setPage] = useState(config?.initialPage ?? 0);
  const [rowsPerPage, setRowsPerPage] = useState(config?.rowsPerPage ?? 5);

  const rowsPerPageOptions = config?.rowPerPageOptions ?? [5, 10, 25];

  function onChangePage(_: unknown, newPage: number) {
    setPage(newPage);
  }

  function onChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  return {
    page,
    rowsPerPage,
    rowsPerPageOptions,
    onChangeRowsPerPage,
    onChangePage
  };
}
