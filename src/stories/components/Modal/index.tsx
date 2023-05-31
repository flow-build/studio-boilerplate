import { ModalProps } from './types';

import { Dialog, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import * as S from './styles';

export const Modal = ({ children, closeModal, title, ...props }: ModalProps) => {
  return (
    <S.Wrapper>
      <Dialog {...props} maxWidth={false} onClose={closeModal} fullWidth>
        {title !== null && (
          <S.DialogTitle>
            {title}
            <S.IconButton aria-label="close" onClick={closeModal}>
              <CloseIcon />
            </S.IconButton>
          </S.DialogTitle>
        )}

        <DialogContent>{children}</DialogContent>
      </Dialog>
    </S.Wrapper>
  );
};
