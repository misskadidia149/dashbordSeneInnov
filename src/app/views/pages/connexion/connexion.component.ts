import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import Swal from 'sweetalert2';
import { AuthService } from '../../../services/auth.services';
import { StorageService } from '../../../services/storage.services';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ CommonModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    FormsModule,
    HttpClientModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})


export class ConnexionComponent implements OnInit  {

  // signinData: Login = {usernameOrEmail: '', password: ''};
  popupResult!: boolean;
  popupMessage = '';

  showAdminBoard = false;
  showUserBoard = false;
  username?: string;

  form: any = {
    username: null,
    password: null,
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private storage: StorageService
  ) {}



  ngOnInit(): void {
    this.isLoggedIn = !!this.storage.getToken();

    if (this.isLoggedIn) {
      const user = this.storage.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.username = user.username;
    }

    if (this.storage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.storage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.storage.saveToken(data.accessToken);
        this.storage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storage.getUser().roles;
        //this.reloadPage();
        this.navigate();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.showErrorPopup(this.errorMessage);
      },
    });
  }

  logout(): void {
    this.storage.signOut();
    window.location.reload();
  }

  navigate() {
    this.router.navigateByUrl('/dashboard');
  }

  reloadPage(): void {
    window.location.reload();
  }

  showErrorPopup(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Erreur',
      text: message,
      confirmButtonText: 'Réessayer'
    });
  }

}
