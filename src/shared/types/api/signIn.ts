import { NextApiRequest } from 'next';

export interface SignInApiRequest extends NextApiRequest {
  body: {
    username: string;
    password: string;
  };
}
