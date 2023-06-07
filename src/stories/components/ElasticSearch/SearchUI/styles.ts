import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  .sui-layout-header,
  .sui-layout-sidebar-toggle {
    display: none;
  }

  .sui-layout-body {
    background-color: transparent;
  }

  .sui-layout-body__inner {
    max-width: 100rem;
    padding: 0;
  }

  .sui-layout-sidebar {
    display: none;
  }

  .pdef-results {
    display: grid;
    grid-template-columns: 1fr;

    ${({ theme }) => theme.breakpoints.up('sm')} {
      grid-template-columns: 1fr 1fr;
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .sui-layout-main {
    width: 100%;
  }

  .sui-layout-main-header__inner {
    display: block;
  }
`;
