import * as S from './styles';
import { ConfirmModalProps } from './types';

export function ConfirmModal({
  title,
  text,
  textButtonConfirm = 'Confirmar',
  textButtonCancel = 'Cancelar',
  open,
  colorButtonConfirm = 'success',
  colorButtonCancel = 'warning',
  variant = 'contained',
  onConfirm
}: ConfirmModalProps) {
  return (
    <S.BoxModal title={title} closeModal={() => onConfirm(false)} open={open}>
      <S.BoxConfirm>
        {text}
        <S.BoxButton>
          <S.ConfirmButton
            color={colorButtonConfirm}
            variant={variant}
            onClick={() => onConfirm(true)}
          >
            {textButtonConfirm}
          </S.ConfirmButton>
          <S.CancelButton
            color={colorButtonCancel}
            variant={variant}
            onClick={() => onConfirm(false)}
          >
            {textButtonCancel}
          </S.CancelButton>
        </S.BoxButton>
      </S.BoxConfirm>
    </S.BoxModal>
  );
}
