import { Button, Container, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const ToolbarHeader = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;

export const LinkHeader = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const ButtonHeader = styled(Button)`
  color: black;
  text-transform: capitalize;
`;
