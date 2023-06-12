import { styled } from '@mui/material/styles';

export const Input = styled('input')`
  width: 100%;
  max-width: 5rem;
  height: 3.125rem;
  text-align: center;
  border: 0.0625rem solid #ccc;
  border-radius: 0.25rem;

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    appearance: textfield;
    -moz-appearance: textfield;
  }
`;
