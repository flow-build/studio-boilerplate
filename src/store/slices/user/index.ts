import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  tempEmail?: string;
  email?: string;
  name?: string;
  sub?: string;
  resettingPassword?: boolean;
  code?: string;
  newPassword?: string;
}

const initialState: InitialState = {
  tempEmail: undefined,
  email: undefined,
  name: undefined,
  sub: undefined,
  resettingPassword: undefined,
  code: undefined,
  newPassword: undefined
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setBasicInfosUser: (
      state,
      action: PayloadAction<{ email: string; name: string; sub: string }>
    ) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.sub = action.payload.sub;
    },
    setTempEmail: (state, action: PayloadAction<string>) => {
      state.tempEmail = action.payload;
    },
    setResettingPassword: (state, action: PayloadAction<string>) => {
      state.tempEmail = action.payload;
      state.resettingPassword = true;
    },
    setCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    setNewPassword: (state, action: PayloadAction<string | undefined>) => {
      state.newPassword = action.payload;
    },
    reset: (state) => {
      state.tempEmail = initialState.tempEmail;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setBasicInfosUser, reset, setResettingPassword, setTempEmail, setNewPassword } =
  userSlice.actions;

export default userSlice.reducer;
