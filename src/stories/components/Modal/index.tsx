import { ModalProps } from './types';

import * as S from './styles';

export const Modal = ({ children, closeModal, title, ...props }: ModalProps) => {
  return (
    <S.Wrapper>
      <S.Dialog {...props} maxWidth={false} onClose={closeModal} fullWidth>
        {title !== null && (
          <S.DialogTitle>
            {title}
            <S.IconButton aria-label="close" onClick={closeModal}>
              <S.CloseIcon />
            </S.IconButton>
          </S.DialogTitle>
        )}

        <S.DialogContent>{children}</S.DialogContent>
      </S.Dialog>
    </S.Wrapper>
  );
};
