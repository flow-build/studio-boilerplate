import { ModalProps } from './types';

import * as S from './styles';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const Modal = ({ children, closeModal, title, ...props }: ModalProps) => {
  return (
    <S.Wrapper>
      <S.Dialog {...props} maxWidth={false} onClose={closeModal}>
        <S.DialogTitle>
          {title}
          <IconButton
            aria-label="close"
            onClick={closeModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
        </S.DialogTitle>
        <S.DialogContent>{children}</S.DialogContent>
      </S.Dialog>
    </S.Wrapper>
  );
};
