import { styled } from '@mui/material/styles';
import MuiTableRow from '@mui/material/TableRow';

export const Wrapper = styled('div')``;

const tableRowOptions = {
  shouldForwardProp: (prop: PropertyKey) => !['clickable'].includes(prop as string)
};
export const TableRow = styled(MuiTableRow, tableRowOptions)<{ clickable?: boolean }>`
  ${({ clickable }) => clickable && { cursor: 'pointer' }}
`;
