import React from 'react';

import Box from '@mui/material/Box';
import TableSortLabel from '@mui/material/TableSortLabel';
import visuallyHidden from '@mui/utils/visuallyHidden';
import _isEqual from 'lodash/isEqual';

type Props = {
  label: string;
  isActive?: boolean;
  direction?: 'asc' | 'desc';
  onSort?: () => void;
};

export const SortLabel: React.FC<Props> = ({ label, isActive, direction, onSort }) => {
  return (
    <TableSortLabel active={isActive} direction={direction ?? 'asc'} onClick={onSort}>
      {label}

      {/* Acessibilidade */}
      {isActive && (
        <Box component="span" sx={visuallyHidden}>
          {_isEqual(direction, 'desc') ? 'sorted descending' : 'sorted ascending'}
        </Box>
      )}
    </TableSortLabel>
  );
};
