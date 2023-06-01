import { Link, styled, Typography, Breadcrumbs as BreadcrumbsMUI } from '@mui/material';

export const LinkLabel = styled(Link)`
  padding: 0;
  margin: 0;

  min-width: auto;
  color: inherit;
  text-transform: capitalize;
  text-decoration: none;

  &:hover {
    background-color: transparent;
    text-decoration: underline;

    & last-child {
      text-decoration: none;
    }
  }
`;

export const LastText = styled(Typography)`
  text-transform: capitalize;
`;

export const Breadcrumbs = styled(BreadcrumbsMUI)`
  .MuiBreadcrumbs-separator {
  }
`;
