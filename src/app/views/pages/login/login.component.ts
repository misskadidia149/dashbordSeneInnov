import { CommonModule } from '@angular/common'; // Import CommonModule for ngStyle and other common directives
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Import RouterModule for navigation
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardGroupComponent,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent,
  TextColorDirective,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { Login } from '../../../models/login';
import { AuthService } from '../../../services/auth.services';
import { StorageService } from '../../../services/storage.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule, // Ensure CommonModule is imported here
    FormsModule,
    RouterModule, // Ensure RouterModule is imported here
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardGroupComponent,
    CardComponent,
    CardBodyComponent,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    IconDirective,
    FormControlDirective,
    ButtonDirective,
    TextColorDirective,
  ],
})
export class LoginComponent implements OnInit {
  type= true;
  changeType(){
    this.type = !this.type;
  }
  signinData: Login = {usernameOrEmail: '', password: ''};
  popupResult!: boolean;
  popupMessage = '';

  showAdminBoard = false;
  showModeratorBoard = false;
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
  
}
