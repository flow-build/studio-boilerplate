import { Amplify, Auth } from 'aws-amplify';
import { amplifyConfig } from 'config/cognito';
import { NextApiResponse } from 'next';
import { BaseResponse } from 'services/httpClient/types';
import { ResendCodeApiRequest } from 'shared/types/api/forgotPassword/resendCode';
import { Logger } from 'utils';

Amplify.configure(amplifyConfig);

export default async function handler(
  req: ResendCodeApiRequest,
  res: NextApiResponse<BaseResponse<void>>
) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      console.log({ email });
      const response = await Auth.forgotPassword(email);

      return res.status(200).json({ data: response, ok: true, status: 200 });
    } catch (error) {
      Logger.error({ error });
      return res.status(400).json({ message: 'Usuário inválido', ok: false, status: 400 });
    }
  }
}
