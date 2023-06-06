export interface OTPInputProps {
  length: number;
  autoFocus?: boolean;
  onChangeToken?: (value: string) => void;
}
