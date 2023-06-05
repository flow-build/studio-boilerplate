import { Amplify, Auth } from 'aws-amplify';
import { amplifyConfig } from 'config/cognito';
import { Logger } from 'utils';

Amplify.configure(amplifyConfig);

export default async function handler(req: any, res: any) {
  console.log({ amplifyConfig });
  if (req.method === 'POST') {
    const { name, email, password } = JSON.parse(req.body);
    try {
      console.log({ name, email, password });
      const result = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name
        }
      });

      Logger.info({ result });

      res.status(200).json({ ok: true });
    } catch (error) {
      Logger.error({ error });
      res.status(400).json({ message: 'Usuário ou senha invválidos' });
    }
  }
}
