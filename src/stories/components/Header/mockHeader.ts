import { AccessTime, Announcement, House, Message } from '@mui/icons-material';
import { Logger } from 'utils';

export const menuItems = [
  {
    id: '1',
    redirectLink: '/listings',
    title: 'Anuncios',
    icon: {
      redirectLink: '/listings',
      icon: Announcement
    }
  },
  {
    id: '2',
    redirectLink: '/locacoes',
    title: 'Locações',
    icon: {
      redirectLink: '/locacoes',
      icon: House
    }
  },
  {
    id: '3',
    redirectLink: '/mensagens',
    title: 'Mensagens',
    icon: {
      redirectLink: '/mensagens',
      icon: Message,
      badge: 12
    }
  },
  {
    id: '4',
    redirectLink: '/acessos',
    title: 'Acessos',
    icon: {
      redirectLink: '/acessos',
      icon: AccessTime
    }
  }
];

export const links = [
  { name: '[Início]', url: '/' },
  { name: '[Sobre]', url: '/sobre' },
  { name: '[Contato]', url: '/sobre' },
  { name: '[FAQ]', url: '/faq' }
];

export const button = {
  name: 'Entrar',
  onClick: () => Logger.info('botão clicado')
};
