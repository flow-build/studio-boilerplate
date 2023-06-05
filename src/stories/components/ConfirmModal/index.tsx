import * as S from './styles';
import { ConfirmModalProps } from './types';

export function ConfirmModal({
  Title,
  Text,
  textButtonConfirm,
  textButtonCancel,
  open,
  onConfirm,
  onClose
}: ConfirmModalProps) {
  return (
    <S.BoxModal title={Title} closeModal={onClose} open={open}>
      <S.BoxConfirm>
        {Text}
        <S.BoxButton>
          <S.IconButton onClick={onConfirm} variant="outlined">
            {textButtonConfirm ?? 'Confirmar'}
          </S.IconButton>
          <S.IconButton onClick={onClose} variant="outlined">
            {textButtonCancel ?? 'Cancelar'}
          </S.IconButton>
        </S.BoxButton>
      </S.BoxConfirm>
    </S.BoxModal>
  );
}
