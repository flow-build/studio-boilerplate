import * as S from './styles';
import { AlertModalProps } from './types';

export function AlertModal({ alertTitle, alertText, open, onClose, buttonText }: AlertModalProps) {
  return (
    <S.BoxModal title={alertTitle} closeModal={onClose} open={open}>
      <S.BoxAlert>
        {alertText}
        <S.IconButton onClick={onClose} variant="outlined">
          {buttonText ?? 'OK'}
        </S.IconButton>
      </S.BoxAlert>
    </S.BoxModal>
  );
}
