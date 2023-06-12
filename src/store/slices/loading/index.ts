import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  isLoading: boolean;
}

const initialState: InitialState = {
  isLoading: false
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setIsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
