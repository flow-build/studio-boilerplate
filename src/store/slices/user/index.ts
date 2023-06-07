import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  email?: string;
  resettingPassword?: boolean;
  code?: string;
}

const initialState: InitialState = {
  email: undefined,
  resettingPassword: undefined,
  code: undefined
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setResettingPassword: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      state.resettingPassword = true;
    },
    setCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    reset: (state) => {
      state.email = initialState.email;
    }
  }
});

// Action creators are generated for each case reducer function
export const { reset, setResettingPassword, setEmail } = userSlice.actions;

export default userSlice.reducer;
