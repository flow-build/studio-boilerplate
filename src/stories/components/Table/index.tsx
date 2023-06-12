import React, { isValidElement, useCallback, useMemo } from 'react';

import Paper from '@mui/material/Paper';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import { SortLabel } from 'stories/components/Table/components/SortLabel';
import { TableProps } from 'stories/components/Table/types';
import { usePagination } from 'stories/components/Table/usePagination';
import { useSort } from 'stories/components/Table/useSort';

import * as S from './styles';

export const Table: React.FC<TableProps> = ({
  column,
  rowData,
  sortable,
  paginable,
  paginationConfig,
  onRowClick,
  ...props
}) => {
  const { order, orderBy, onChangeSort, stableSort, getComparator } = useSort();
  const { onChangePage, onChangeRowsPerPage, page, rowsPerPage, rowsPerPageOptions } =
    usePagination(paginationConfig);

  const visibleRows = useMemo(() => {
    if (!rowData) {
      return [];
    }

    const sortedData = stableSort(rowData, getComparator(order, orderBy));

    if (!paginable) {
      return sortedData;
    }

    return sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [rowData, paginable, stableSort, getComparator, order, orderBy, page, rowsPerPage]);

  const hasReactNode = useCallback(
    (field: string) => {
      return rowData?.some((row) => isValidElement(row[field]));
    },
    [rowData]
  );

  return (
    <S.Wrapper {...props}>
      <TableContainer component={Paper}>
        <MuiTable>
          <TableHead>
            <S.TableRow>
              {column.map((elem) => (
                <TableCell key={elem.field} {...elem}>
                  {(hasReactNode(elem.field) || !sortable) && (elem.label ?? elem.field)}

                  {!hasReactNode(elem.field) && sortable && (
                    <SortLabel
                      label={elem.label ?? elem.field}
                      isActive={orderBy === elem.field}
                      direction={orderBy === elem.field ? order : 'asc'}
                      onSort={() => onChangeSort(elem.field)}
                    />
                  )}
                </TableCell>
              ))}
            </S.TableRow>
          </TableHead>

          <TableBody>
            {visibleRows?.map((elem, index) => (
              <S.TableRow
                key={index.toString()}
                hover={!!onRowClick}
                clickable={!!onRowClick}
                onClick={() => onRowClick && onRowClick(elem)}
              >
                {column.map((columnElem, columnIndex) => (
                  <TableCell key={columnIndex.toString()} {...columnElem}>
                    {elem[columnElem.field]}
                  </TableCell>
                ))}
              </S.TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>

      {paginable && (
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={rowData?.length ?? 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
        />
      )}
    </S.Wrapper>
  );
};
