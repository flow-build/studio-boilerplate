import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  .result-search-ui {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    ${({ theme }) => theme.breakpoints.up('sm')} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const ItemResult = styled('li')`
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin: none;
  }
`;
