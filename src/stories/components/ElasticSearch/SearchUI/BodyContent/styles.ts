import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  .result-search-ui {
    display: grid;
    grid-template-columns: 1fr;

    ${({ theme }) => theme.breakpoints.up('sm')} {
      grid-template-columns: 1fr 1fr;
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
