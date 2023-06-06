import { Backdrop, CircularProgress } from '@mui/material';

import { LoadingProps } from './types';

export function Loading({ size, loader, open = true }: LoadingProps) {
  return (
    <Backdrop open={open}>
      <CircularProgress></CircularProgress>
    </Backdrop>
  );
}
