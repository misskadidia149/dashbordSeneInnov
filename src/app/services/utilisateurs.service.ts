import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Agriculteur } from '../models/agriculteur'; // Import du modèle utilisateur (si tu en as un)

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  env=environment;
  constructor(private http: HttpClient) { }

  getAllUser(): Observable<Agriculteur[]> {
    return this.http.get<Agriculteur[]>(`${this.env.api}` + `/api/agriculteur/read`);
  }

  getRobot(): Observable<any> {
    return this.http.get<any>(`${this.env.api}` + `/api/robot/read`);
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
      return this.http.post(`${this.env.api}/api/agriculteur/create`, user);
  }

  detail(id: number): Observable<Agriculteur> {
    return this.http.get<Agriculteur>(`${this.env.api}` + `/api/agriculteur/get/${id}`);
  }

  // Méthode pour supprimer un utilisateur
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.env.api}/api/agriculteur/delete/${id}`);
  }
}
