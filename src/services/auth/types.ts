export interface SignInProps {
  name: string;
  email: string;
  phone: string;
  fiscalId: string;
  password: string;
}

export type ForgotPasswordProps = {
  username: string;
  code: string;
  password: string;
};

export type ChangePasswordProps = {
  oldPassword: string;
  newPassword: string;
};
