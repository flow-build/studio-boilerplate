import React, { useCallback, useEffect } from 'react';

import { Input } from 'stories/components/Forms/OTPInput/components/Input';
import { OTPInputProps } from 'stories/components/Forms/OTPInput/types';
import { useInput } from 'stories/components/Forms/OTPInput/useInput';

import * as S from './styles';

export const OTPInput: React.FC<OTPInputProps> = ({
  autoFocus,
  length,
  onChangeToken,
  ...props
}) => {
  const { activeInputIndex, onBlur, onChange, onFocus, onKeyDown, onPaste, otpValues } =
    useInput(length);

  const handleOtpChange = useCallback(
    (otp: string[]) => {
      const otpValue = otp.join('');

      if (onChangeToken) {
        onChangeToken(otpValue);
      }
    },
    [onChangeToken]
  );

  useEffect(() => {
    handleOtpChange(otpValues);
  }, [handleOtpChange, otpValues]);

  return (
    <S.Wrapper {...props}>
      {Array(length)
        .fill('')
        .map((_, index) => (
          <Input
            key={`OTPInput-${index}`}
            type="number"
            focus={activeInputIndex === index}
            autoFocus={autoFocus}
            value={otpValues && otpValues[index]}
            onChange={onChange}
            onFocus={onFocus(index)}
            onKeyDown={onKeyDown}
            onPaste={onPaste}
            onBlur={onBlur}
          />
        ))}
    </S.Wrapper>
  );
};
