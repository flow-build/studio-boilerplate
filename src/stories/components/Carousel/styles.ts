import { styled } from '@mui/material';
import MUIGrid from '@mui/material/Grid';

export const Wrapper = styled('div')`
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  color: ${({ theme }) => theme.palette.grey[600]};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: bold;
    text-decoration-line: underline;
  }
`;

export const Button = styled(`button`)`
  cursor: pointer;
  background-color: white;
  margin-top: 0.5rem;
`;

export const Grid = styled(MUIGrid)`
  text-align: center;
`;
