import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'EtatRobot',
        pathMatch: 'full'
      },
      {
        path: 'accordion',
        loadComponent: () => import('./accordion/accordions.component').then(m => m.AccordionsComponent),
        data: {
          title: 'Accordion'
        }
      },
      {
        path: 'breadcrumbs',
        loadComponent: () => import('./breadcrumbs/breadcrumbs.component').then(m => m.BreadcrumbsComponent),
        data: {
          title: 'Breadcrumbs'
        }
      },
      {
        path: 'EtatRobot',
        loadComponent: () => import('./EtatRobot/EtatRobot.component').then(m => m.EtatRobotComponent),
        data: {
          title: 'EtatRobot'
        }
      },
      {
        path: 'utilisateurs',
        loadComponent: () => import('./utilisateurs/utilisateurs.component').then(m => m.UtilisateursComponent),
        data: {
          title: 'utilisateurs'
        }
      },
      {
        path: 'collapse',
        loadComponent: () => import('./collapses/collapses.component').then(m => m.CollapsesComponent),
        data: {
          title: 'Collapse'
        }
      },
      {
        path: 'list-group',
        loadComponent: () => import('./list-groups/list-groups.component').then(m => m.ListGroupsComponent),
        data: {
          title: 'List Group'
        }
      },
      {
        path: 'navs',
        loadComponent: () => import('./navs/navs.component').then(m => m.NavsComponent),
        data: {
          title: 'Navs & Tabs'
        }
      },
      {
        path: 'categorie',
        loadComponent: () => import('./categorie/categorie.component').then(m => m.categoriesComponent),
        data: {
          title: 'categorie'
        }
      },
      {
        path: 'placeholder',
        loadComponent: () => import('./placeholders/placeholders.component').then(m => m.PlaceholdersComponent),
        data: {
          title: 'Placeholder'
        }
      },
      {
        path: 'popovers',
        loadComponent: () => import('./popovers/popovers.component').then(m => m.PopoversComponent),
        data: {
          title: 'Popovers'
        }
      },
      {
        path: 'progress',
        loadComponent: () => import('./progress/progress.component').then(m => m.ProgressComponent),
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'spinners',
        loadComponent: () => import('./spinners/spinners.component').then(m => m.SpinnersComponent),
        data: {
          title: 'Spinners'
        }
      },
      {
        path: 'tables',
        loadComponent: () => import('./tables/tables.component').then(m => m.TablesComponent),
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        loadComponent: () => import('./tabs/tabs.component').then(m => m.AppTabsComponent),
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'tooltips',
        loadComponent: () => import('./tooltips/tooltips.component').then(m => m.TooltipsComponent),
        data: {
          title: 'Tooltips'
        }
      }
    ]
  }
];


