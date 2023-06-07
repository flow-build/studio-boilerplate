import { NextApiRequest } from 'next';

export interface VerifyEmailApiRequest extends NextApiRequest {
  body: {
    email: string;
    code: string;
  };
}
