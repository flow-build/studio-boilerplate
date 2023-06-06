import { Logger } from 'utils';

export const menuItems = [
  {
    id: '1',
    redirectLink: '/inicio',
    title: 'Inicio'
  },
  {
    id: '2',
    redirectLink: '/sobre',
    title: 'Sobre'
  },
  {
    id: '2',
    redirectLink: '/contato',
    title: 'Contato'
  },
  {
    id: '2',
    redirectLink: '/faq',
    title: 'FAQ'
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
