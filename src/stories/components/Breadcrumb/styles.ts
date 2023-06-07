import { styled, Typography } from '@mui/material';
import Link from 'next/link';

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
  }
`;

export const LastText = styled(Typography)`
  text-transform: capitalize;
  display: inline;
`;
