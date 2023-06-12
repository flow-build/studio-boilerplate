import { AccessTime, Announcement, House, Message, TableRows } from '@mui/icons-material';
import { Logger } from 'utils';

export const menuItems = [
  {
    id: '1',
    redirectLink: '/listings',
    title: 'Anúncios',
    icon: {
      redirectLink: '/listings',
      icon: Announcement
    }
  },
  {
    id: '2',
    redirectLink: '/form',
    title: 'Formulário de coisa',
    icon: {
      redirectLink: '/form',
      icon: House
    }
  },
  {
    id: '3',
    redirectLink: '/static-page',
    title: 'Página estática',
    icon: {
      redirectLink: '/static page',
      icon: AccessTime
    }
  },
  {
    id: '4',
    redirectLink: '/',
    title: 'Notificações',
    icon: {
      redirectLink: '/',
      icon: Message,
      badge: 12
    }
  },
  {
    id: '5',
    redirectLink: '/table',
    title: 'Tabela',
    icon: {
      redirectLink: '/table',
      icon: TableRows
    }
  }
];

export const links = [
  { name: 'Início', url: '/' },
  { name: 'Anúncios', url: '/listings' },
  { name: 'Cadastro', url: '/register' }
];

export const button = {
  name: 'Entrar',
  onClick: () => Logger.info('botão clicado')
};
