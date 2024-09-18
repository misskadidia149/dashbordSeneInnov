import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/utilisateurs'; // Import du modèle utilisateur (si tu en as un)

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  env=environment;
  constructor(private http: HttpClient) { }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.env.api}` + `/api/user/read`);
  }

  createUtilisateur(nomEtPrenom: any, username: any, telephone: any, password: any): Observable<any> {
    // const dat: FormData = new FormData();
    let user = {
      "nomEtPrenom": nomEtPrenom,
      "username": username,
      "telephone": telephone,
      "password": password
    }
    console.log(user);
    // dat.append('data', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));
      return this.http.post(`${this.env.api}/api/auth/signup`, user);
  }

  detail(id: number): Observable<User> {
    return this.http.get<User>(`${this.env.api}` + `/api/user/get/${id}`);
  }

  // Méthode pour supprimer un utilisateur
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.env.api}/api/user/delete/${id}`);
  }
}
