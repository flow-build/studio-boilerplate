import md5 from 'md5';

export function getAavatarURL(email: string) {
  const address = String(email).trim().toLowerCase();
  const hash = md5(address);
  return `https://www.gravatar.com/avatar/${hash}`;
}
