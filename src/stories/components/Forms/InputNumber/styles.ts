import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

export const InputContainer = styled(Box)`
  display: flex;
  width: fit-content;
`;

export const ActionBox = styled(IconButton)`
  display: flex;
  width: 3rem;
  height: 3rem;

  justify-content: center;
  align-items: center;
  align-content: center;
  border: 0.0625rem solid #d3d9e6;
`;

export const Input = styled(InputBase)`
  display: flex;

  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: #273246;

  .MuiInputBase-input {
    width: 2.8125rem;
    text-align: center;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
