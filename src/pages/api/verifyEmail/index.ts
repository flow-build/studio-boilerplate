import { Amplify, Auth } from 'aws-amplify';
import { amplifyConfig } from 'config/cognito';
import { NextApiResponse } from 'next';
import { BaseResponse } from 'services/httpClient/types';
import { VerifyEmailApiRequest } from 'shared/types/api/verifyEmail';
import { Logger } from 'utils';

Amplify.configure(amplifyConfig);

export default async function handler(
  req: VerifyEmailApiRequest,
  res: NextApiResponse<BaseResponse<void>>
) {
  if (req.method === 'POST') {
    const { email, code } = req.body;

    try {
      const response = await Auth.confirmSignUp(email, code);

      return res.status(200).json({ data: response, ok: true, status: 200 });
    } catch (error: any) {
      Logger.error({ error });
      return res.status(400).json({ message: error.code, ok: false, status: 400 });
    }
  }
}
