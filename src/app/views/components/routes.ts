import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // data: {
    //   title: 'Dashboard'
    // },
    children: [
      {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
      },
      {
        path: 'accueil',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        data: {
          title: 'Accueil'
        },
      },
      {
        path: 'etat-robots',
        loadComponent: () => import('./EtatRobot/EtatRobot.component').then(m => m.EtatRobotComponent),
        data: {
          title: 'Etat robots'
        },
      },
      {
        path: 'map',
        loadComponent: () => import('./leaflet-map/leaflet-map.component').then(m => m.LeafletMapComponent),
        data: {
          title: 'Map'
        },
      },
      {
        path: 'utilisateurs',
        loadComponent: () => import('./utilisateurs/utilisateurs.component').then(m => m.UtilisateursComponent),
        data: {
          title: 'Utilisateurs'
        },
      },
      {
        path: 'update-categorie/:id',
        loadComponent: () => import('./categorie/update-categorie/update-categorie.component').then(m => m.UpdateCategorieComponent),
      },
      {
        path: 'categories',
        loadComponent: () => import('./categorie/categorie.component').then(m => m.categoriesComponent),
        data: {
          title: 'Categories'
        },
      },
      {
        path: 'formations',
        loadComponent: () => import('./formation/formation.component').then(m => m.FormationComponent),
        data: {
          title: 'Formations'
        },
      },
      {
        path: 'update-formation/:id',
        loadComponent: () => import('./formation/update-formation/update-formation.component').then(m => m.UpdateFormationComponent),
      },
      {
        path: 'notifications',
        loadComponent: () => import('./notifications/notifications.component').then(m => m.NotificationsComponent),
        data: {
          title: 'Notifications'
        },
      },
      {
        path: 'profile',
        loadComponent: () => import('./profil/profil.component').then(m => m.ProfilComponent),
        data: {
          title: 'Profile'
        },
      },
    ]
}
]