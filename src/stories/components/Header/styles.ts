import { Avatar, Button, Container, Divider, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const ToolbarHeader = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const ContainerHeaderAvatar = styled(Container)`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const AvatarHeader = styled(Avatar)`
  margin-right: 0.5rem;
  padding: 0;
`;

export const ContainerHeaderLogged = styled(Container)`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const LinkHeader = styled(Link)`
  text-decoration: none;
`;

export const ButtonHeader = styled(Button)`
  text-transform: capitalize;
`;

export const DividerHeader = styled(Divider)`
  font-size: 20px;
`;
