import { NextApiRequest } from 'next';

export interface SendCodeApiRequest extends NextApiRequest {
  body: {
    email: string;
  };
}
