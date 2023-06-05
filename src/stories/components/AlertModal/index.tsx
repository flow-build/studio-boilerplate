import * as S from './styles';
import { AlertModalProps } from './types';

export function AlertModal({ alertTitle, alertText, open, OnClose, buttonText }: AlertModalProps) {
  return (
    <S.BoxModal title={alertTitle} closeModal={OnClose} open={open}>
      <S.BoxAlert>
        {alertText}
        <S.IconButton onClick={OnClose} variant="outlined">
          {buttonText ?? 'OK'}
        </S.IconButton>
      </S.BoxAlert>
    </S.BoxModal>
  );
}
