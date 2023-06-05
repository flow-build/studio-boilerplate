import { Badge } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Content = styled('div')`
  display: flex;
  margin: 0 ${spacing.S5};

  ${({ theme }) => theme.breakpoints.up('md')} {
    & > MuiGrid-root {
      flex-basis: fit-content;
    }
  }
`;

export const IconLinkButton = styled(IconButton)`
  padding: 0;
  gap: 0;
  text-transform: none;
  :hover {
    background-color: transparent;
  }
`;

export const AlertIcon = styled(Badge)`
  span {
    padding: 0;
    gap: 0;
    background: #d82e23;
    font-size: ${fontSizes.F10};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  }
`;
