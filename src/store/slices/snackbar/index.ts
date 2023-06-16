import { AlertColor } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  show: boolean;
  message?: string;
  severity?: AlertColor;
  variant?: 'outlined' | 'filled' | 'standard';
}

const initialState: InitialState = {
  show: false,
  message: undefined,
  severity: 'info',
  variant: 'filled'
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackbar: (_, action: PayloadAction<Omit<InitialState, 'show'>>) => {
      return { show: true, ...action.payload };
    },

    clearSnackbar: () => {
      return initialState;
    }
  }
});

// Action creators are generated for each case reducer function
export const { clearSnackbar, showSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
