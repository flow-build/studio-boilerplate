import { NextApiRequest } from 'next';

export interface SubmitNewPasswordApiRequest extends NextApiRequest {
  body: {
    username: string;
    code: string;
    newPassword: string;
  };
}
