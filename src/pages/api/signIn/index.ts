/* eslint-disable @typescript-eslint/no-explicit-any */
import { Amplify, Auth } from 'aws-amplify';
import { amplifyConfig } from 'config/cognito';
import { NextApiResponse } from 'next';
import { SignInApiRequest } from 'shared/types/api/signIn';
import { Logger } from 'utils';

Amplify.configure(amplifyConfig);

export default async function handler(req: SignInApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    try {
      const response = await Auth.signIn({ username, password });

      return res.status(200).json(response);
    } catch (error: any) {
      Logger.error({ error });

      return res.status(400).json({ message: error?.code, ok: false, status: 400 });
    }
  }
}
