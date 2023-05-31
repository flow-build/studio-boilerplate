import { ModalProps } from './types';

import CloseIcon from '@mui/icons-material/Close';

import * as S from './styles';

export const Modal = ({ children, closeModal, title, ...props }: ModalProps) => {
  return (
    <S.Wrapper>
      <S.Dialog {...props} maxWidth={false} onClose={closeModal} fullWidth>
        {title !== null && (
          <S.DialogTitle>
            {title}
            <S.IconButton aria-label="close" onClick={closeModal}>
              <CloseIcon />
            </S.IconButton>
          </S.DialogTitle>
        )}

        <S.DialogContent>{children}</S.DialogContent>
      </S.Dialog>
    </S.Wrapper>
  );
};
