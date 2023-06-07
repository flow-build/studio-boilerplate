import { Amplify, Auth } from 'aws-amplify';
import { amplifyConfig } from 'config/cognito';
import { NextApiResponse } from 'next';
import { BaseResponse } from 'services/httpClient/types';
import { Logger } from 'utils';

import { ResendCodeApiRequest } from './types';

Amplify.configure(amplifyConfig);

export default async function handler<T>(
  req: ResendCodeApiRequest,
  res: NextApiResponse<BaseResponse<T>>
) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const response = (await Auth.resendSignUp(email)) as T;

      return res.status(200).json({ data: response, ok: true, status: 200 });
    } catch (error) {
      Logger.error({ error });
      return res.status(400).json({ message: 'Usuário inválido', ok: false, status: 400 });
    }
  }
}
