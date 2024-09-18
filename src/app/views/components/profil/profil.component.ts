import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.services';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class ProfilComponent implements OnInit{
  content?: string;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  username?: string;
  telephone?: string;
  currentUser: any;

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storage.getUser();

    this.isLoggedIn = !!this.storage.getToken();

    if (this.isLoggedIn) {
      const user = this.storage.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
      this.telephone = user.telephone;
      console.log(user);
    }

  }

}
