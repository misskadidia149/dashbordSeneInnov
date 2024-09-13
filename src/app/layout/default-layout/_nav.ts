import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Tableau de Bord',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Gestion des Robots',
    title: true
  },
  {
    name: 'Etat des robots',
    iconComponent: { name: 'cil-locomotive' },
    url: '/base/cards'
  },
  {
    name: 'Contrôle à Distance',
    iconComponent: { name: 'cil-find-in-page' },
    url: '/charts'
  },
  {
    name: 'Analyse des Données',
    title: true
  },
  {
    name: 'Rapport des sols',
    iconComponent: { name: 'cil-chart-pie' },
    url: '/charts'
  },
  {
    name: 'Historique des analyses',
    iconComponent: { name: 'cil-description' },
    url: '/charts'
  },
  {
    name: 'Gestionnaire',
    title: true
  },

  {
    name: 'Utilisateurs',
    iconComponent: { name: 'cil-user' },
    url: '/utilsateurs',
    badge: {
      color: 'info',
      text: 'NEW'
    },
    },
  
  {
    name: 'Formations',
    url: '/base/tables',
    iconComponent: { name: 'cil-education' },
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    badge: {
      color: 'danger',
      text: '+99'
    },
  },
  {
    title: true,
    name: 'Links',
    class: 'mt-auto'
  },
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/5.x/',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];
