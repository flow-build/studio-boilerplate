import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled(Box)`
  margin: ${spacing.S10} 0;
`;

export const ContainerPasswordLevel = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${spacing.S16};
`;

export const ProgressBarPasswordLevelEmpty = styled(Box)`
  width: 80%;
  height: 0.3125rem;
  background-color: ${({ theme }) => theme.palette.grey[500]};
`;

export const ProgressBarPasswordLevel = styled(ProgressBarPasswordLevelEmpty, {
  shouldForwardProp: (prop) => !['strength'].includes(prop as string)
})<{ strength: string }>`
  transition: width 2s, background 1s;
  ${({ theme, strength }) => {
    switch (strength) {
      case 'weak':
        return `width: 30%;
        background: ${theme.palette.error.main};`;
      case 'medium':
        return `width: 50%;
        background: ${theme.palette.warning.main};`;
      case 'strong':
        return `width: 100%;
        background: ${theme.palette.success.light}`;
      case 'great':
        return `width: 100%;
        background: ${theme.palette.success.main}`;
      case '':
      default:
        return `width: 0%;
        background: ${theme.palette.grey[900]}`;
    }
  }}
`;

export const TextLevelPassword = styled(Typography)`
  font-size: ${fontSizes.F12};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  color: ${({ theme }) => theme.palette.grey[900]};
`;

export const ContainerTips = styled(Box)`
  padding-left: ${spacing.S16};
  margin-top: ${spacing.S10};
`;

export const TitleTips = styled(Typography)`
  font-size: ${fontSizes.F12};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  color: ${({ theme }) => theme.palette.grey[500]};
`;

export const DescriptionTips = styled(TitleTips)`
  font-size: ${fontSizes.F10};
`;
