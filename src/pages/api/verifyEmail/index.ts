import { Amplify, Auth } from 'aws-amplify';
import { amplifyConfig } from 'config/cognito';
import { NextApiResponse } from 'next';
import { BaseResponse } from 'services/httpClient/types';
import { Logger } from 'utils';

import { VerifyEmailApiRequest } from './types';

Amplify.configure(amplifyConfig);

export default async function handler<T>(
  req: VerifyEmailApiRequest,
  res: NextApiResponse<BaseResponse<T>>
) {
  if (req.method === 'POST') {
    const { email, code } = req.body;

    try {
      const response = (await Auth.confirmSignUp(email, code)) as T;

      return res.status(200).json({ data: response, ok: true, status: 200 });
    } catch (error: any) {
      Logger.error({ error });
      return res.status(400).json({ message: error.code, ok: false, status: 400 });
    }
  }
}
