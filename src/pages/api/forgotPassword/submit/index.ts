import { Amplify, Auth } from 'aws-amplify';
import { amplifyConfig } from 'config/cognito';
import { NextApiResponse } from 'next';
import { SubmitNewPasswordApiRequest } from 'shared/types/api/forgotPassword/submit';
import { Logger } from 'utils';

Amplify.configure(amplifyConfig);

export default async function handler(req: SubmitNewPasswordApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, code, newPassword } = req.body;

    try {
      const response = await Auth.forgotPasswordSubmit(username, code, newPassword);

      return res.status(200).json(response);
    } catch (error) {
      Logger.error({ error });
      return res.status(400).json({ message: 'Usuário inválido', ok: false, status: 400 });
    }
  }
}
