import md5 from 'md5';
import { validateEmail } from 'utils/validators';

export function getAvatarURL(email: string) {
  const isEmail = validateEmail(email);
  if (!isEmail) return;

  const address = email.trim().toLowerCase();
  const hash = md5(address);
  return `https://www.gravatar.com/avatar/${hash}`;
}
