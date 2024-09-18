import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('auth-token') || sessionStorage.getItem('auth-token')) {
      // L'utilisateur est authentifié
      return true;
    } else {
      // L'utilisateur n'est pas authentifié, redirection vers la page de login
      this.router.navigate(['/connexion']);
      return false;
    }
  }
}
