import { Auth } from 'aws-amplify';
import Router from 'next/router';
import { Logger } from 'utils';

import api from '../../httpClient';
import { ChangePasswordProps, ForgotPasswordProps, SignInProps } from '../types';

export const signUp = async (payload: SignInProps) => {
  try {
    await api.post('/api/auth', payload);
    Router.push('/esqueci-minha-senha');
  } catch (error) {
    Logger.error('error signing up:', error);
    return null;
  }
};

export const signIn = async ({ email, password }: SignInProps) => {
  const user = await Auth.signIn(email, password);

  return user;
};

export const signOut = async () => {
  const response = await Auth.signOut({ global: true });
  return response;
};

export const forgotPassword = async (username: string) => {
  const result = await Auth.forgotPassword(username);
  return result;
};

export const forgotPasswordSubmit = async ({ username, code, password }: ForgotPasswordProps) => {
  const result = await Auth.forgotPasswordSubmit(username, code, password);
  return result;
};

export const changePassword = async ({ oldPassword, newPassword }: ChangePasswordProps) => {
  Auth.currentAuthenticatedUser().then((user) => {
    return Auth.changePassword(user, oldPassword, newPassword);
  });
};
