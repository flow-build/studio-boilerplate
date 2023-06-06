import * as S from './styles';
import { ConfirmModalProps } from './types';

export function ConfirmModal({
  title,
  text,
  textButtonConfirm = 'Confirmar',
  textButtonCancel = 'Cancelar',
  open,
  onConfirm
}: ConfirmModalProps) {
  return (
    <S.BoxModal title={title} closeModal={() => onConfirm(false)} open={open}>
      <S.BoxConfirm>
        {text}
        <S.BoxButton>
          <S.IconButton onClick={() => onConfirm(true)} variant="outlined">
            {textButtonConfirm}
          </S.IconButton>
          <S.IconButton onClick={() => onConfirm(false)} variant="outlined">
            {textButtonCancel}
          </S.IconButton>
        </S.BoxButton>
      </S.BoxConfirm>
    </S.BoxModal>
  );
}
