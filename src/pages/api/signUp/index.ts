import { Amplify, Auth } from 'aws-amplify';
import { amplifyConfig } from 'config/cognito';
import { NextApiRequest, NextApiResponse } from 'next';
import { Logger } from 'utils';

Amplify.configure(amplifyConfig);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name
        }
      });

      res.status(200).json({});
    } catch (error) {
      Logger.error({ error });
      res.status(400).json({ message: 'Erro ao realizar cadastro', status: 400 });
    }
  }
}
