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
    url: '/base/EtatRobot'
  },
  {
    name: 'Contrôle à Distance',
    iconComponent: { name: 'cil-find-in-page' },
    url: 'map'
  },
  {
    name: 'Gestionnaire',
    title: true
  },

  {
    name: 'Utilisateurs',
    iconComponent: { name: 'cil-user' },
    url: '/base/utilisateurs',
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
    name: 'Categories',
    url: '/base/categorie',
    iconComponent: { name: 'cil-education' },
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
