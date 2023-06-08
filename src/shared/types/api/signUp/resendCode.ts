import { NextApiRequest } from 'next';

export interface ResendCodeApiRequest extends NextApiRequest {
  body: {
    email: string;
  };
}
