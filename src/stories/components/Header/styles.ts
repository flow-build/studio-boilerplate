import { Container, Divider, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const ToolbarHeader = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing.S16};
`;

export const ContainerHeaderAvatar = styled(Container)`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing.S16};
`;

export const ContainerHeaderLogged = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing.S16};
`;

export const LinkHeader = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const DividerHeader = styled(Divider)`
  font-size: ${fontSizes.F20};
`;
