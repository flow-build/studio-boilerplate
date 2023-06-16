import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { clearSnackbar } from 'store/slices/snackbar';

import { Loading } from '../Loading';
import { SnackbarAlerts } from '../SnackbarAlert';
import * as S from './styles';
import { MainContentProps } from './types';

export const MainContent: FC<MainContentProps> = ({ children }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector((store: RootState) => store.loading.isLoading);
  const snackbar = useSelector((store: RootState) => store.snackbar);

  return (
    <>
      <S.MainContentWrapper>{children}</S.MainContentWrapper>
      {isLoading && <Loading size={200} />}

      <SnackbarAlerts
        open={snackbar.show}
        autoHideDuration={3000}
        message={snackbar.message}
        severity={snackbar.severity || 'info'}
        onClose={() => dispatch(clearSnackbar())}
      />
    </>
  );
};
