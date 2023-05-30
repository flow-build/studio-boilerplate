import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

export const Container = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonLink = styled(Button)`
  width: auto;
  height: auto;

  margin: 0 auto;
  padding: 0;
  border: transparent;

  &:hover {
    background: transparent;
    border: transparent;
  }
  cursor: pointer;
`;

export const Content = styled(Box)`
  width: auto;
  height: auto;
  margin: 0 auto;
  padding: 0;
`;
