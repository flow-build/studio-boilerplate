import { Button } from '../Forms/Button';
import * as S from './styles';
import { AlertModalProps } from './types';

export function AlertModal({
  alertTitle,
  alertText,
  open,
  onClose,
  buttonText,
  color = 'error',
  variant = 'contained'
}: AlertModalProps) {
  return (
    <S.BoxModal title={alertTitle} closeModal={onClose} open={open}>
      <S.BoxAlert>
        {alertText}
        <Button onClick={onClose} variant={variant} color={color}>
          {buttonText ?? 'OK'}
        </Button>
      </S.BoxAlert>
    </S.BoxModal>
  );
}
