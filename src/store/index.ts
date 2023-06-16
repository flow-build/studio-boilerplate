import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from 'store/slices/loading';
import snackbarReducer from 'store/slices/snackbar';
import userReducer from 'store/slices/user';

export const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    snackbar: snackbarReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
