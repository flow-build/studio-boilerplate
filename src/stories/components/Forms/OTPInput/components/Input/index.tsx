import React, { memo, useRef, useLayoutEffect } from 'react';

import { usePrevious } from 'shared/hooks/usePrevious';
import { SingleOTPInputProps } from 'stories/components/Forms/OTPInput/components/Input/types';

import * as S from './styles';

export function SingleOTPInputComponent({ focus, autoFocus, ...props }: SingleOTPInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious(!!focus);

  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return <S.Input ref={inputRef} {...props} />;
}

export const Input = memo(SingleOTPInputComponent);
